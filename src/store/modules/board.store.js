import { boardService } from "../../services/board.service.js";
import { storageService } from "../../services/async-storage.service.js";
// import { filterService } from '../../services/filterFunctions';

export const boardStore = {
  state: {
    boards: boardService.query(),
    board: null,
    showBoardMenu: false,
    showCardComposerInput: false,
    screen:{
      showScreen:false,
      card:null,
      pos:{
        x:100,
        y:100,
      }
    }
    // showScreen:true,
  },
  getters: {
    board(state) {
      // console.log(state.boards);
      return state.boards[0];
    },
    boards(state) {
      // console.log(state.boards);
      return state.boards;
    },
    menuState(state) {
      return state.showBoardMenu;
    },
    screenState(state) {
      return state.screen;
    },
    cardComposerState(state) {
      return state.showCardComposerInput;
    },
    filterBy(state) {
      return state.filterBy;
    },
  },
  mutations: {
    toggleCardComposer(state) {
      // alert('hi')
      state.showCardComposerInput = !state.showCardComposerInput;
    },

    toggleScreen(state,card,pos) {
      // if(card !== state.screen.card && pos !== state.screen.pos){
      const screen = JSON.parse(JSON.stringify(state.screen))
      screen.showScreen = !state.screen.showScreen;
      if(card){
        screen.card = card
        
      }
      if(pos){
        screen.pos.x = pos.x
        screen.pos.y = pos.y

        
      }
      state.screen = screen
    // }
    },
    toggleMenu(state) {
      state.showBoardMenu = !state.showBoardMenu;
    },
    setBoards(state, { boards }) {
      state.boards = boards;
    },
    removeBoard(state, { boardId }) {
      const idx = state.boards.findIndex((t) => t._id === boardId);
      state.boards.splice(idx, 1);
    },
    updateBoard(state, { board }) {
      const idx = state.boards.findIndex((t) => t._id === board._id);
      state.boards.splice(idx, 1, board);
    },
    addBoard(state, { board }) {
      state.boards.push(board);
    },

    addList(state, { newList, listId }) {
      state.boards.then((board) => {
        const board2 = JSON.parse(JSON.stringify(board[0]));

        board[0].lists.push(newList);
        state.board = board[0];
      });
      // const currList = state.boards
      //   .then((board) => {
      //     // const board2 = (JSON.parse(JSON.stringify(board[0])));
      //     board[0].lists.push(newList)
      //     // console.log(curr.cards);
      //     // return curr
      //     state.board = board[0]
      //   })
    },

    updateHeader(state, { title, listId }) {
      state.boards.then((board) => {
        // const board2 = (JSON.parse(JSON.stringify(board[0])))
        const curr = JSON.parse(JSON.stringify(board[0].lists)).find(
          (list) => list.id === listId
        );
        curr.title = title;
        const idx = board[0].lists.findIndex((list) => list.id === listId);
        board[0].lists.splice(idx, 1, curr);
        state.board = board[0];
      });
    },

    addCard(state, { newCard, listId }) {
      console.log(newCard);
      const currList = state.boards.then((board) => {
        // console.log(board[0]);
        // console.log(board[0].lists[1].id);
        // console.log(listId);
        console.log(
          JSON.parse(JSON.stringify(board[0].lists)).find(
            (list) => list.id === listId
          )
        );
        const curr = JSON.parse(JSON.stringify(board[0].lists)).find(
          (list) => list.id === listId
        );
        curr.cards.push(newCard);
        console.log(curr.cards);
        // return curr
        const idx = board[0].lists.findIndex((list) => list.id === listId);
        board[0].lists.splice(idx, 1, curr);
        state.board = board[0];
        console.log(state.board);
      });

      // console.log(state.boards);
    },
    setFilter(state, { filterBy }) {
      // debugger
      state.filterBy = filterBy;
    },
    setFilterField(state, { field, value }) {
      state.filterBy[field] = value;
    },
    clearFilter(state) {
      state.filterBy = {
        amenity: "all",
        amenities: [],
        type: "all",
        location: "",
        country: "", //for explore list
        numGuests: 0,
        dates: { startDate: 0, endDate: 0 },
        count: Infinity, //change this to PAGE_SIZE when add pagination
        currPage: 1,
        hostId: "",
      };
      console.log("filter clear");
    },
    showViewers(state) {
      state.showViewers = true;
    },
    // addReview(state, { board }) {
    //   const idx = state.boards.findIndex((t) => t._id === board._id);
    //   state.boards.splice(idx, 1, board);
    // },
  },

  actions: {
    toggleCardComposer(context) {
      context.commit({ type: "toggleCardComposer" });
    },

    toggleScreen(context,{card,pos}) {
      //   console.log('clicked, store');
      console.log(pos);
      context.commit({ type: "toggleScreen" ,card,pos});
    },
    toggleMenu(context) {
      //   console.log('clicked, store');
      context.commit({ type: "toggleMenu" });
    },

    // async liked(context,payload){
    //     console.log(payload.boardId);
    // },
    async loadBoards(context) {
      try {
        const boards = await boardService.query(context.getters.filterBy);
        context.commit({ type: "setBoards", boards });
        return boards;
      } catch (err) {
        console.log("Cannot load boards in store");
        throw err;
      }
    },
    async removeBoard({ commit }, payload) {
      try {
        await boardService.remove(payload.boardId);
        commit(payload);
      } catch (err) {
        console.log("Cannot remove", boardId);
        throw err;
      }
    },
    async saveBoard({ commit, getters, state }, payload) {
      // await boardService.updateBoard(state.board)

      // console.log(payload);
      // // alert('hi')
      // // const boards = getters.boards
      // const board = state.board
      // console.log(board);
      // // const type = payload.board._id ? 'updateBoard' : 'addBoard';
      // const type = board._id ? 'updateBoard' : 'addBoard';
      try {
        // const savedBoard = await boardService.save(payload.board);
        const savedBoard = await boardService.save(state.board);
        // commit({ type, board: savedBoard });
        return savedBoard;
      } catch (err) {
        // console.log('Cannot save board', review, boardId);
        throw err;
      }
    },

    async addList({ commit, dispatch }, payload) {
      try {
        console.log("payload", payload);
        payload.newList.id = storageService._makeId();
        await commit(payload);
      } catch (err) {
        console.log("Cannot save card");
        throw err;
      }
    },

    updateHeader(context, payload) {
      // console.log('context', context);
      // console.log('payload', payload);
      // this.commit(payload)
      context.commit(payload);
    },

    async addCard({ commit, dispatch }, payload) {
      // const type = payload.card._id ? 'updateCard' : 'addCard';
      try {
        console.log("payload", payload);
        payload.newCard.id = storageService._makeId();
        // const savedCard = await boardService.save(payload.card);
        await commit(payload);
        // setTimeout(()=>{
        //   dispatch({type:'saveBoard'})

        // },2000)
        // dispatch({type:'saveBoard'})
        // return savedCard;
      } catch (err) {
        console.log("Cannot save card");
        throw err;
      }
    },
  },
};

import { boardService } from '../../services/board.service.js';
import { storageService } from '../../services/async-storage.service.js';
// import { filterService } from '../../services/filterFunctions';

export const boardStore = {
  state: {
    draggingFrom: null,
    time: Date.now(),
    updatedActivities: false,
    // boards: boardService.query(),
    boards: null,
    currBoard: null,
    // board: null,
    showBoardMenu: false,
    showCardComposerInput: false,
    showScreen: false,
    showCreateBoardScreen: false,
    showLabels: false,
    // showLabels: false,
    currCard: {
      card: null,
      pos: {
        x: 100,
        y: 100,
      },
      width: null,
      listId: null,
    },
    isQuickEdit: false,
  },

  // ===================================================================
  // ============================  GETTERS  ============================
  // ===================================================================

  getters: {
    updatedActivities(state){
      return state.updatedActivities
    },
    draggingFrom(state) {
      return state.draggingFrom;
    },
    time(state) {
      return state.time;
    },
    board(state) {
      // return state.boards[0];
      return state.currBoard;
    },
    boards(state) {
      return state.boards;
    },
    menuState(state) {
      return state.showBoardMenu;
    },
    screenState(state) {
      return state.showScreen;
    },
    labelsState(state) {
      return state.showLabels;
    },
    currCard(state) {
      return state.currCard;
    },
    isQuickEdit(state) {
      return state.isQuickEdit;
    },
    screenCreateBoardState(state) {
      return state.showCreateBoardScreen;
    },
    cardComposerState(state) {
      return state.showCardComposerInput;
    },
    filterBy(state) {
      return state.filterBy;
    },
  },

  // =====================================================================
  // ============================  MUTATIONS  ============================
  // =====================================================================

  mutations: {
    updateActCardTitle(state, { card }) {
      state.updatedActivities = !state.updatedActivities;

      let activities = state.currBoard.activities;
      activities = activities.map((activity) => {
        if (activity.actPayload.card.id == card.id) {
          activity.actPayload.card.title = card.title;
        }
        return activity;
      });
      state.currBoard.activities = activities;
      // })
    },
    updateActDeletedCard(state, { card }) {
      state.updatedActivities = !state.updatedActivities;

      let activities = state.currBoard.activities;
      activities = activities.filter((activity) => {
        return activity.actPayload.card.id !== card.id;
      });
      state.currBoard.activities = activities;
      // })
    },
    updateActListTitle(state, { listId }) {
      state.updatedActivities = !state.updatedActivities;

      let activities = state.currBoard.activities;
      const list = state.currBoard.lists.find((list) => list.id === listId);
      activities = activities.map((activity) => {
        if (activity.actPayload.currList.id === list.id) {
          activity.actPayload.currList.title = list.title;
        }
        if (activity.actPayload.prevList.id === list.id) {
          activity.actPayload.prevList.title = list.title;
        }

        return activity;
      });
      state.currBoard.activities = activities;
    },
    setStartDragPos(state, { list }) {
      // console.log(listTitle);
      state.draggingFrom = list;
    },

    setInterval(state) {
      state.time = Date.now();
    },

    addActivity(state, { activity }) {
      state.currBoard.activities.unshift(activity);
      state.updatedActivities = !state.updatedActivities;
    },
    toggleScreen(state) {
      state.showScreen = !state.showScreen;
    },
    toggleCreateBoardScreen(state) {
      state.showCreateBoardScreen = !state.showCreateBoardScreen;
    },
    toggleMenu(state) {
      state.showBoardMenu = !state.showBoardMenu;
    },
    // switchCardModal(state){
    //   state.quickEdit = !state.quickEdit
    // },

    openCardDetails(state) {
      // alert('details')
      state.isQuickEdit = false;
    },
    openCardQuickEditor(state) {
      // alert('edit')
      state.isQuickEdit = true;
    },

    // ============================  MUTATIONS - BOARD  ============================

    setCurrBoard(state, { board }) {
      state.currBoard = board;
    },

    setBoards(state, { boards }) {
      state.boards = boards;
    },

    removeBoard(state, { boardId }) {
      let idx = state.boards.findIndex((t) => t._id === boardId);
      state.boards.splice(idx, 1);
      // console.log('length',state.boards.length);
      // console.log('idx',idx);
      if (state.boards.length === idx) {
        idx--;
      }
      state.currBoard = state.boards[idx];
      // state.currBoard = this.state.boards[this.state.boards.length - 1];
    },
    updateBoardTitle(state, { title, boardId }) {
      state.currBoard.title = title;

      const idx = state.boards.findIndex((board) => board._id === boardId);
      state.boards.splice(idx, 1, state.currBoard); //????
      // state.boards[idx].title = title
    },

    updateBoard(state, { board }) {
      const idx = state.boards.findIndex((t) => t._id === board._id);
      state.boards.splice(idx, 1, board);
    },

    addBoard(state, { newBoard }) {
      // console.log('newboard',newBoard);
      state.currBoard = newBoard;
      let boards = state.boards;
      boards.push(newBoard);
      // state.boards.push(newBoard);
      // console.log(state.currBoard);
      state.boards = boards;
    },

    // ============================  MUTATIONS - LIST  ============================

    removeList(state, { listId }) {
      const currBoard = state.currBoard;
      const idx = currBoard.lists.findIndex((list) => list.id === listId);
      currBoard.lists.splice(idx, 1);
      state.currBoard = currBoard;
    },

    addList(state, { newList, listId }) {
      const currBoard = state.currBoard;
      currBoard.lists.push(newList);
      state.currBoard = currBoard;
    },

    updateHeader(state, { title, listId }) {
      // const currBoard = JSON.parse(JSON.stringify(state.currBoard)) ;
      const currBoard = state.currBoard;
      const curr = currBoard.lists.find((list) => list.id === listId);
      curr.title = title;
      const idx = currBoard.lists.findIndex((list) => list.id === listId);
      currBoard.lists.splice(idx, 1, curr);
      state.currBoard = currBoard;
    },

    // ============================  MUTATIONS - CARD  ============================

    toggleCardComposer(state) {
      // alert('hi')
      state.showCardComposerInput = !state.showCardComposerInput;
    },

    toggleLabels(state) {
      state.showLabels = !state.showLabels;
    },

    setCurrCard(state, { card, pos, listId, elWidth }) {
      const currCard = JSON.parse(JSON.stringify(state.currCard));
      currCard.card = card;
      currCard.pos = pos;
      currCard.listId = listId;
      currCard.width = elWidth;
      state.currCard = currCard;
      // console.log(state.currCard);
    },
    resetCurrCard(state, { card, pos, listId, elWidth }) {
      const currCard = {};
      currCard.card = card;
      // currCard.card = {};
      currCard.pos = {
        x: null,
        y: null,
      };
      currCard.listId = null;
      currCard.width = null;
      state.currCard = currCard;
    },

    removeCard(state, { card, listId }) {
      const currBoard = state.currBoard;
      // state.boards.then((board) => {
      const curr = currBoard.lists.find((list) => list.id === listId);
      const cardIdx = curr.cards.findIndex(
        (loopCard) => loopCard.id === card.id
      );
      curr.cards.splice(cardIdx, 1);
      const idx = currBoard.lists.findIndex((list) => list.id === listId);
      currBoard.lists.splice(idx, 1, curr);
      state.currBoard = currBoard;
      // });
    },

    updateCard(state, { card, listId }) {
      const cardId = card.id;
      // const currBoard = JSON.parse(JSON.stringify(state.currBoard)) ;
      const currBoard = state.currBoard;
      // const currList = state.boards.then((board) => {
      const curr = currBoard.lists.find((list) => list.id === listId);
      const cardIdx = curr.cards.findIndex((card) => card.id === cardId);
      curr.cards.splice(cardIdx, 1, card);
      const idx = currBoard.lists.findIndex((list) => list.id === listId);
      currBoard.lists.splice(idx, 1, curr);
      state.currBoard = currBoard;
      // });
    },

    addCard(state, { newCard, listId }) {
      // addCard(state,  newCard, listId ) {
      // const currBoard = JSON.parse(JSON.stringify(state.currBoard)) ;
      const currBoard = state.currBoard;
      // const curr = JSON.parse(JSON.stringify(currBoard.lists)).find(
      const curr = currBoard.lists.find((list) => list.id === listId);
      curr.cards.push(newCard);
      const idx = currBoard.lists.findIndex((list) => list.id === listId);
      currBoard.lists.splice(idx, 1, curr);
      state.currBoard = currBoard;
    },

    relocateCard(state, { relocation, card, listId }) {
      let boardToSave = {};
      // alert('hi')
      if (state.currBoard._id === relocation.board) {
        boardToSave = state.currBoard;
      } else {
        boardToSave = JSON.parse(
          JSON.stringify(
            state.boards.find((board) => board._id === relocation.board)
          )
        );
      }

      // const boardToSave = state.boards.find(board=> board._id === relocation.board)

      // state.currBoard = boardToSave;

      // console.log(boardToSave);
      const listToSave = boardToSave.lists.find(
        (list) => list.id === relocation.list
      );
      listToSave.cards.splice(relocation.pos - 1, 0, card);
      const idx = boardToSave.lists.findIndex(
        (list) => list.id === relocation.list
      );
      boardToSave.lists.splice(idx, 1, listToSave);
      // console.log(boardToSave);
      // state.currBoard = boardToSave;

      if (state.currBoard._id === relocation.board) {
        state.currBoard = boardToSave;
      } else {
        const boardIdx = state.boards.findIndex(
          (board) => board._id === relocation.board
        );
        state.boards.splice(boardIdx, 1, boardToSave);
      }
    },
  },

  // ===================================================================
  // ============================  ACTIONS  ============================
  // ===================================================================

  actions: {
    //   updateCardActivity(context,{ card, listTitle }){
    updateActCardTitle(context, { card }) {
      console.log('card', card);
      context.commit({ type: 'updateActCardTitle', card });
    },
    updateActListTitle(context, { listId }) {
      context.commit({ type: 'updateActListTitle', listId });
    },

    startDrag(context, { card, list }) {
      context.commit({ type: 'setStartDragPos', list });
      // console.log(payload);
      // console.log(payload.listTitle);
    },
    endDrag(context, { card, list }) {
      const prevList = context.getters.draggingFrom;
      // console.log(draggingFrom);
      // console.log(card);
      // const currList = list

      // const txt = {
      //   menu:
      //     'moved ' + card.title + ' from ' + draggingFrom + ' to ' + listTitle,
      //   details: 'moved this card from ' + draggingFrom + ' to ' + listTitle,
      // };
      context.dispatch({
        type: 'addActivity',
        action: 'MOVE_CARD',
        card,
        list,
        prevList,
      });
    },

    timeInterval(context) {
      setInterval(() => {
        context.commit({ type: 'setInterval' });
      }, 1000);
    },

    // addActivity(context, payload) {
    //   let activity = boardService.getEmptyActivity();
    //   activity.txt = payload.txt;
    //   activity.task.id = payload.card.id;
    //   activity.task.title = payload.card.title;
    //   //  console.log(activity);
    //   context.commit({ type: 'addActivity', activity });
    // },

    addActivity(context, payload) {
      console.log(payload);

      let activity = boardService.getEmptyActivity();
      activity.action = payload.action;
      activity.actPayload.card.id = payload.card.id;
      activity.actPayload.card.title = payload.card.title;
      activity.actPayload.currList.id = payload.list.id;
      activity.actPayload.currList.title = payload.list.title;
      // if(payload.prevList.id){

      activity.actPayload.prevList.id = payload.prevList.id;
      activity.actPayload.prevList.title = payload.prevList.title;
      // }
      if (payload.member) {
        activity.actPayload.member._id = payload.member._id;
        activity.actPayload.member.fullname = payload.member.fullname;
      }
      console.log(activity);
      // activity.actPayload.prevList.id = payload.listId;
      context.commit({ type: 'addActivity', activity });
    },

    toggleScreen(context, payload) {
      context.commit(payload);
    },
    toggleCreateBoardScreen(context, payload) {
      context.commit(payload);
    },

    toggleMenu(context) {
      context.commit({ type: 'toggleMenu' });
    },

    openCardDetails(context) {
      context.commit({ type: 'openCardDetails' });
    },
    openCardQuickEditor(context) {
      context.commit({ type: 'openCardQuickEditor' });
    },

    // ============================  ACTIONS - BOARD  ============================
    async createBoards() {
      // if (!await boardService.query().length) {
      await boardService._createBoards();
      // console.log('created from store!!');
      // }
    },
    async loadBoard(context, payload) {
      try {
        const board = await boardService.getById(payload);
        context.commit({ type: 'setCurrBoard', board });
        return board;
      } catch (err) {
        console.log('cannot load board');
        throw err;
      }
    },

    async loadBoards(context) {
      try {
        // const boards = await boardService.query(context.getters.filterBy);
        // if(!context.getters.boards)
        const boards = boardService
          .query(context.getters.filterBy)
          .then((boards) => {
            // console.log('boards', boards);
            context.commit({ type: 'setBoards', boards });
            // context.commit({ type: 'setCurrBoard', board: boards[0] });
            return boards;
          });

        return boards;
      } catch (err) {
        console.log('Cannot load boards in store');
        throw err;
      }
    },

    async removeBoard({ commit }, payload) {
      try {
        // console.log(payload.boardId);
        await boardService.remove(payload.boardId);
        commit(payload);
      } catch (err) {
        console.log('Cannot remove', boardId);
        throw err;
      }
    },

    async updateBoardTitle(context, payload) {
      // console.log('payload',payload);
      try {
        context.commit(payload);
        await context.dispatch({ type: 'saveBoard' });
        // context.dispatch({ type: 'loadBoards' });
      } catch (err) {
        console.log('cannot update board title');
      }
    },

    async addBoard(context, payload) {
      try {
        let board = boardService.getEmptyBoard();
        // console.log('board from store',board);
        board.title = payload.title;
        board.style.bgColor = payload.bgColor;
        const newBoard = await boardService.save(board);
        // console.log(newBoard);
        context.commit({ type: 'addBoard', newBoard });
        return newBoard;
      } catch (err) {
        console.log('Cannot add board', err);
      }
    },

    async saveBoard({ commit, getters, state }, payload) {
      // // const type = payload.board._id ? 'updateBoard' : 'addBoard';
      // const type = board._id ? 'updateBoard' : 'addBoard';
      try {
        // const savedBoard = await boardService.save(payload.board);
        const savedBoard = await boardService.save(state.currBoard);
        // commit({ type, board: savedBoard });
        return savedBoard;
      } catch (err) {
        console.log('Cannot save board', review, boardId);
        throw err;
      }
    },

    // ============================  ACTIONS - LIST  ============================

    removeList(context, payload) {
      const list = context.getters.board.lists.find(
        (list) => list.id === payload.listId
      );

      // context.commit({ type: 'updateActDeletedList', list });
      list.cards.map((card) => {
        // context.dispatch({
        //   type: 'removeCard',
        //   card,
        //   listId: payload.listId,
        // });
        context.commit({ type: 'updateActDeletedCard', card });
      });
      context.commit(payload);

      const prevList = {
        id: '',
        title: '',
      };
      const card = {
        id: '',
        title: '',
      };

      context.dispatch({
        type: 'addActivity',
        action: 'REMOVE_LIST',
        card,
        list,
        prevList,
      });

      context.dispatch({ type: 'saveBoard' });
    },

    async addList({ commit, dispatch }, payload) {
      try {
        payload.newList.id = storageService._makeId();
        await commit(payload);

        const prevList = {
          id: '',
          title: '',
        };
        const card = {
          id: '',
          title: '',
        };

        dispatch({
          type: 'addActivity',
          action: 'ADD_LIST',
          card,
          list: payload.newList,
          prevList,
        });

        dispatch({ type: 'saveBoard' });
      } catch (err) {
        console.log('Cannot save list');
        throw err;
      }
    },

    async updateHeader(context, payload) {
      await context.commit(payload);
      context.dispatch({ type: 'saveBoard' });
    },

    // ============================  ACTIONS - CARD  ============================

    toggleCardComposer(context) {
      context.commit({ type: 'toggleCardComposer' });
    },

    toggleLabels(context, payload) {
      context.commit(payload);
    },

    setCurrCard(context, payload) {
      context.commit(payload);
    },

    resetCurrCard(context, payload) {
      const card = boardService.getEmptyCard();
      context.commit({ type: 'resetCurrCard', card });
    },
    removeCard(context, payload) {
      const currList = context.getters.board.lists.find(
        (list) => list.id === payload.listId
      );
      // const listTitle = currList.title;
      // const card = currList.find((card2) => card2.id === payload.cardId);
      const card = payload.card;
      context.commit({ type: 'updateActDeletedCard', card });
      // const txt = {
      //   menu: 'deleted ' + card.title + ' from ' + listTitle,
      //   details: 'deleted this card from ' + listTitle,
      // };
      const prevList = {
        id: '',
        title: '',
      };

      context.dispatch({
        type: 'addActivity',
        action: 'REMOVE_CARD',
        card,
        list: currList,
        prevList,
      });
      context.commit(payload);
    },

    saveCard(context, { card, listId }) {
      context.commit({ type: 'updateCard', card, listId });
    },

    async addCard({ getters, commit, dispatch }, payload) {
      // const type = payload.card._id ? 'updateCard' : 'addCard';
      // console.log(payload);
      // const newCard = payload.newCard
      try {
        // newCard.id = storageService._makeId();
        payload.newCard.id = storageService._makeId();
        // await commit({type:'addCard',newCard,listId});
        await commit(payload);

        const currList = getters.board.lists.find(
          (list) => list.id === payload.listId
        );
        const prevList = {
          id: '',
          title: '',
        };

        // const listTitle = currList.title;
        // const txt = {
        //   menu:'added ' + payload.newCard.title + ' to ' + listTitle,
        //   details: 'added this card to ' + listTitle
        // }
        // dispatch({
        //   type: 'addActivity',
        //   card: payload.newCard,
        //   txt,
        //   // txt: 'added ' + payload.newCard.title + ' to ' + listTitle,
        // });

        const action = 'ADD_CARD';
        dispatch({
          type: 'addActivity',
          card: payload.newCard,
          list: currList,
          prevList,
          action,
        });

        dispatch({ type: 'saveBoard' });
      } catch (err) {
        console.log('Cannot save card');
        throw err;
      }
    },
    relocateCard(context, payload) {
      context.commit(payload);
      const cardId = payload.card.id;
      const listId = payload.listId;
      context.commit({ type: 'removeCard', cardId, listId });
    },
  },
};

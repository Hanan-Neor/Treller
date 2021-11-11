import { boardService } from '../../services/board.service.js';
import { storageService } from '../../services/async-storage.service.js';
// import { filterService } from '../../services/filterFunctions';

export const boardStore = {
  state: {
    // boards: boardService.query(),
    boards: null,
    currBoard: null,
    // board: null,
    showBoardMenu: false,
    showCardComposerInput: false,
    showScreen: false,
    showCreateBoardScreen: false,
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
      currCard.card = {};
      currCard.pos = {
        x: null,
        y: null,
      };
      currCard.listId = null;
      currCard.width = null;
      state.currCard = currCard;
    },

    removeCard(state, { cardId, listId }) {
      const currBoard = state.currBoard;
      // state.boards.then((board) => {
      const curr = currBoard.lists.find((list) => list.id === listId);
      const cardIdx = curr.cards.findIndex((card) => card.id === cardId);
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
      // const currBoard = JSON.parse(JSON.stringify(state.currBoard)) ;
      const currBoard = state.currBoard;
      // const curr = JSON.parse(JSON.stringify(currBoard.lists)).find(
      const curr = currBoard.lists.find((list) => list.id === listId);
      curr.cards.push(newCard);
      const idx = currBoard.lists.findIndex((list) => list.id === listId);
      currBoard.lists.splice(idx, 1, curr);
      state.currBoard = currBoard;
    },
  },

  // ===================================================================
  // ============================  ACTIONS  ============================
  // ===================================================================

  actions: {
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
      context.commit(payload);
      context.dispatch({ type: 'saveBoard' });
    },

    async addList({ commit, dispatch }, payload) {
      try {
        payload.newList.id = storageService._makeId();
        await commit(payload);
        dispatch({ type: 'saveBoard' });
      } catch (err) {
        console.log('Cannot save card');
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

    setCurrCard(context, payload) {
      context.commit(payload);
    },

    resetCurrCard(context, payload) {
      context.commit(payload);
    },
    removeCard(context, payload) {
      context.commit(payload);
    },

    saveCard(context, { card, listId }) {
      context.commit({ type: 'updateCard', card, listId });
    },

    async addCard({ commit, dispatch }, payload) {
      // const type = payload.card._id ? 'updateCard' : 'addCard';
      try {
        payload.newCard.id = storageService._makeId();
        // const savedCard = await boardService.save(payload.card);
        await commit(payload);
        dispatch({ type: 'saveBoard' });
      } catch (err) {
        console.log('Cannot save card');
        throw err;
      }
    },
  },
};

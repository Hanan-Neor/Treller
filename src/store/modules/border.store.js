import { boardService } from '../../services/board.service.js';
// import { filterService } from '../../services/filterFunctions';

export const boardStore = {
  state: {
      boards: boardService.query(),
      showBorderMenu:false,

  },
  getters: {
    boards(state) {
        // console.log(state.boards);
      return state.boards;
    },
    menuState(state){
        return state.showBorderMenu
    },
    filterBy(state) {
      return state.filterBy;
    },
  },
  mutations: {
    toggleMenu(state){
        state.showBorderMenu = !state.showBorderMenu
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
    setFilter(state, { filterBy }) {
      // debugger
      state.filterBy = filterBy;
    },
    setFilterField(state, { field, value }) {
      state.filterBy[field] = value;
    },
    clearFilter(state) {
      state.filterBy = {
        amenity: 'all',
        amenities: [],
        type: 'all',
        location: '',
        country: '', //for explore list
        numGuests: 0,
        dates: { startDate: 0, endDate: 0 },
        count: Infinity, //change this to PAGE_SIZE when add pagination
        currPage: 1,
        hostId: '',
      };console.log('filter clear');
    },
    showViewers(state){state.showViewers = true}
    // addReview(state, { board }) {
    //   const idx = state.boards.findIndex((t) => t._id === board._id);
    //   state.boards.splice(idx, 1, board);
    // },
  },
  actions: {
      toggleMenu(context){
        //   console.log('clicked, store');
        context.commit({type:'toggleMenu'})
      },
    
    // async liked(context,payload){
    //     console.log(payload.boardId);
    // },
    async loadBoards(context) {
      try {
        const boards = await boardService.query(context.getters.filterBy);
        context.commit({ type: 'setBoards', boards });
          return boards;
      } catch (err) {
        console.log('Cannot load boards in store');
        throw err;
      }
    },
    async removeBoard({ commit }, payload) {
      try {
        await boardService.remove(payload.boardId);
        commit(payload);
      } catch (err) {
        console.log('Cannot remove', boardId);
        throw err;
      }
    },
    async saveBoard({ commit }, payload) {
      const type = payload.board._id ? 'updateBoard' : 'addBoard';
      try {
        const savedBoard = await boardService.save(payload.board);
        commit({ type, board: savedBoard });
        return savedBoard;
      } catch (err) {
        console.log('Cannot save board', review, boardId);
        throw err;
      }
    },
  },
};

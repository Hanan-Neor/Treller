
import {userService} from './../../services/user.service'

export const userStore = {
    state: {
        // loggedinUser: 'hello' ,
        loggedinUser: userService.getLoggedinUser() ,
        users: [],
    },

    getters: {
        loggedinUser(state){
            return state.loggedinUser
        }
    },

    mutations: {
        setUsers(state, {users}){
            state.users = users
        }

    },

    actions: {
        async loadUsers({commit}) {
            try{
                const users = await userService.getUsers();
                const user = {
                    username: 'Matthias',
                    password: 'Matthias'
                }
                await userService.login(user)
                console.log(users);
                commit({type: 'setUsers', users});
            }catch(err){
                console.log('userStore: Error in loadUsers', err);
                throw err;
            }
        }

    }
}


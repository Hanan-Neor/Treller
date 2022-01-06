
import {userService} from './../../services/user.service'

export const userStore = {
    state: {
        // loggedinUser: 'hello' ,
        loggedinUser: null ,
        users: [],
    },

    getters: {
        loggedinUser(state){
            return state.loggedinUser
        },
        users(state){
            return state.users
        }
    },

    mutations: {
        setUsers(state, {users}){
            state.users = users
        },
        setLoggedinUser(state, {loggedinUser}){
            state.loggedinUser = loggedinUser;
        },

    },

    actions: {
        async loadUsers({commit}) {
            try{
                const users = await userService.getUsers();
                // const user = {
                //     username: 'Matthias',
                //     password: 'Matthias'
                // }
                // await userService.login(user)
                console.log(users);
                commit({type: 'setUsers', users});
            }catch(err){
                console.log('userStore: Error in loadUsers', err);
                throw err;
            }
        },
        async loadLoggedinUser(context){
            try{
                const loggedinUser = await userService.getLoggedinUser();
                context.commit({type: 'setLoggedinUser' , loggedinUser});
                return loggedinUser
            }catch(err){
                console.log('userstore: Error in loadLoggedinUser', err);
            }
        },

        async login(context, {user}){
            try{
                // alert('hi store!')
                // const user = payload.user
                console.log(user);
                // const user = {};
                // user.username = ;
                // user.password = ;
                await userService.logout();

               const loggedinUser =  await userService.login(user);
                context.commit({type: 'setLoggedinUser' , loggedinUser});
                console.log(loggedinUser);
                return loggedinUser

            }catch(err){
                console.log('userstore: failed to login' , err);
            }
        }

    }
}


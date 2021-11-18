import { httpService } from './http.service.js';
import { storageService } from './async-storage.service.js';
import { utilService } from './util.service.js';
const BOARD_KEY = 'board';

export const boardService = {
    query,
    remove,
    save,
    getEmptyBoard,
    getEmptyList,
    getEmptyCard,
    getById,
    _createBoards
};

window.boardService = boardService;
// _createBoards();


// ================================================================================
// ===============================================================================

// Guidelines
// *. Save the entire board / and later on the Task level, dont handle mini-updates
// *. No need for saving an activities array per task, those activities are easily filtered from the board activities
// *. activites - when board is updated, the frontend does not send the activities array within the board 
//    instead it only sends a new activity object: {txt, boardId, groupId, taskId}
//    the backend adds this activity to the board with $push and can also emit socket notificatios
// *. D & D Guidelines - vuedraggable / react-beutiful-dnd
// *. Same model for Monday style app (do not implement a generic columns feature)
// *. boardStore no need for group/task stores
// *. rendering performance
// *. we do not handle concurrent editing - needs versioning
// *. render optimization


// const board = {
//     "_id": "b101",
//     "title": "Robot dev proj",
//     "createdAt": 1589983468418,
//     "createdBy": {
//         "_id": "u101",
//         "fullname": "Abi Abambi",
//         "imgUrl": "http://some-img"
//     },
//     "style": {},
//     "labels": [
//         {
//             "id": "l101",
//             "title": "Done",
//             "color": "#61bd4f"
//         }
//     ],
//     "members": [
//         {
//             "_id": "u101",
//             "fullname": "Tal Tarablus",
//             "imgUrl": "https://www.google.com"
//         }
//     ],
//     "lists": [
//         {
//             "id": "g101",
//             "title": "List 1",
//             "cards": [
//                 {
//                     "id": "c101",
//                     "title": "Replace logo"
//                 },
//                 {
//                     "id": "c102",
//                     "title": "Add Samples"
//                 }
//             ],
//             "style": {}
//         },
//         {
//             "id": "g102",
//             "title": "List 2",
//             "cards": [
//                 {
//                     "id": "c103",
//                     "title": "Do that"
//                 },
//                 {
//                     "id": "c104",
//                     "title": "Help me",
//                     "description": "description",
//                     "comments": [
//                         {
//                             "id": "ZdPnm",
//                             "txt": "also @yaronb please CR this",
//                             "createdAt": 1590999817436.0,
//                             "byMember": {
//                                 "_id": "u101",
//                                 "fullname": "Tal Tarablus",
//                                 "imgUrl": "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
//                             }
//                         }
//                     ],
//                     "checklists": [
//                         {
//                             "id": "YEhmF",
//                             "title": "Checklist",
//                             "todos": [
//                                 {
//                                     "id": "212jX",
//                                     "title": "To Do 1",
//                                     "isDone": false
//                                 }
//                             ]
//                         }
//                     ],
//                     "members": [
//                         {
//                             "_id": "u101",
//                             "username": "Tal",
//                             "fullname": "Tal Tarablus",
//                             "imgUrl": "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
//                         }
//                     ],
//                     "labelIds": ["101"],
//                     "createdAt": 1590999730348,
//                     "dueDate": 16156215211,
//                     "byMember": {
//                         "_id": "u101",
//                         "username": "Tal",
//                         "fullname": "Tal Tarablus",
//                         "imgUrl": "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
//                     },
//                     "style": {
//                         "bgColor": "#26de81"
//                     }
//                 }
//             ],
//             "style": {}
//         }
//     ],
//     "activities": [
//         {
//             "id": "a101",
//             "txt": "Changed Color",
//             "createdAt": 154514,
//             "byMember": {
//                 "_id": "u101",
//                 "fullname": "Abi Abambi",
//                 "imgUrl": "http://some-img"
//             },
//             "task": {
//                 "id": "c101",
//                 "title": "Replace Logo"
//             }
//         }
//     ]
// }
const user = {
    "_id": "u101",
    "fullname": "Abi Abambi",
    "username": "abi@ababmi.com",
    "password": "aBambi123",
    "imgUrl": "http://some-img.jpg",
    "mentions": [{
        "id": "m101",
        "boardId": "m101",
        "taskId": "t101"
    }]
}


// ================================================================================
// ===============================================================================














// async function query(filterBy) {
    async function query() {
    // console.log('filter in service', filterBy);
    try {
        let boards = await httpService.get(`board`); //SERVER STORAGE
        // let boards = await httpService.get(`board`, filterBy); //SERVER STORAGE
        // let boards = await storageService.query(BOARD_KEY); //CLIENT STORAGE
        
        // const boardsForDisplay = await filterService.getBoardsForDisplay(
        //   boards,
        //   filterBy
        // );
        return boards;
    } catch (err) {
        console.log('error getting boards in service', this.filterBy);
        throw err;
    }

    // return boards;
}

function remove(boardId) {
      return httpService.delete(`board/${boardId}`); //SERVER STORAGE
    // return storageService.remove(BOARD_KEY, boardId); //CLIENT STORAGE
}

async function save(board) {
    // console.log(board);
    if (board._id) {
        board = await httpService.put(`board/${board._id}`, board); //SERVER STORAGE
        return board; //SERVER STORAGE
        // return storageService.put(BOARD_KEY, board); //CLIENT STORAGE
    } else {
        board = await httpService.post(`board`, board); //SERVER STORAGE
        return board; //SERVER STORAGE
        // return storageService.post(BOARD_KEY, board); //CLIENT STORAGE
    }
}

async function getById(boardId) {
      return httpService.get(`board/${boardId}`); //SERVER STORAGE
    // const board = await storageService.get(BOARD_KEY, boardId); //CLIENT STORAGE
    return board; //CLIENT STORAGE
}

function getEmptyList() {
    return {
        "id": "",
        "title": "xx",
        "cards": [],
        "style": {}
    }
}

function getEmptyCard() {
    return {


        "id": "",
        "title": "",
        "description": "",
        "comments": [
            // {
            //     "id": "ZdPnm",
            //     "txt": "also @yaronb please CR this",
            //     "createdAt": 1590999817436.0,
            //     "byMember": {
            //         "_id": "u101",
            //         "fullname": "Tal Tarablus",
            //         "imgUrl": "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
            //     }
            // }
        ],
        "checklists": [
            // {
            //     "id": "YEhmF",
            //     "title": "Checklist",
            //     "todos": [
            //         {
            //             "id": "212jX",
            //             "title": "To Do 1",
            //             "isDone": false
            //         }
            //     ]
            // }
        ],
        "members": [
            // {
            //     // "_id": "u101",
            //     // "username": "Tal",
            //     // "fullname": "Tal Tarablus",
            //     // "imgUrl": "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
            // }
        ],
        "labelIds": [],
        "createdAt": null,
        "dueDate": null,
        "byMember": {
            // "_id": "u101",
            // "username": "Tal",
            // "fullname": "Tal Tarablus",
            // "imgUrl": "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
        },
        "style": {
            "bgColor": ""
        }
    }




}

function getEmptyBoard() {
    // const id = utilService.makeId()
    // console.log(id);
    const newBoard = {
        
            // "_id": null,
            "title": "NEW BOARD",
            "createdAt": null,
            "createdBy": {
               
            },
            "style": {},
            "labels": [
                {
                    "id" : "101",
                    "title" : "",
                    "color" : "#7bc86c"
                }, 
                {
                    "id" : "102",
                    "title" : "",
                    "color" : "#F5DD29"
                }, 
                {
                    "id" : "103",
                    "title" : "",
                    "color" : "#FFAF3F"
                },
                {
                    "id" : "104",
                    "title" : "",
                    "color" : "#EF7564"
                }, 
                {
                    "id" : "105",
                    "title" : "",
                    "color" : "#CD8DE5"
                }, 
                {
                    "id" : "106",
                    "title" : "",
                    "color" : "#5BA4CF"
                }
                
            ],
            "members": [
               
            ],
            "lists": [
                {
                    "id": "g101",
                    "title": "To Do",
                    "cards": [
                     
                    ],
                    "style": {}
                },
                {
                    "id": "g102",
                    "title": "Doing",
                    "cards": [
                    ],
                    "style": {}
                },
                {
                    "id": "g103",
                    "title": "Done",
                    "cards": [
                    ],
                    "style": {}
                },

            ],
            "activities": [
               
            ]
        }

        // newBoard._id = id
        return newBoard

        
    
}

async function _createBoards() {
    console.log('creating boards');
    if (boards && boards.length) return boards; //CLIENT STORAGE
    let boards = await storageService.query(BOARD_KEY); //CLIENT STORAGE
    //   let boards = utilService.loadFromStorage(BOARD_KEY); //SERVER STORAGE

    if (!boards || !boards.length) {
        boards = [

            {
                "_id": "b101",
                "title": "BOARD 1",
                "createdAt": 1589983468418,
                "createdBy": {
                    "_id": "u101",
                    "fullname": "Abi Abambi",
                    "imgUrl": "http://some-img"
                },
                "style": {},
                "labels": [
                    {
                        "id": "l101",
                        "title": "Done",
                        "color": "#61bd4f"
                    }
                ],
                "members": [
                    {
                        "_id": "u101",
                        "fullname": "Lauren",
                        "imgUrl": "https://res.cloudinary.com/dymtestxz/image/upload/v1626737459/sprint4/spaces/9%20-%20Manor%20cottage/reviewers/32ac3cfb-6279-48a6-a0be-1168a86a9fad_ztoixt.jpg"
                        },
                    {
                        "_id": "u102",
                        "fullname": "Nathanael",
                        "imgUrl": "https://res.cloudinary.com/dymtestxz/image/upload/v1626735749/sprint4/spaces/9%20-%20Manor%20cottage/reviewers/a89a7679-f8de-4d16-938c-1a4fa1b8005e_wmwu3m.jpg"
                        },
                ],
                "lists": [
                    {
                        "id": "g101",
                        "title": "List 1",
                        "cards": [
                            {
                                "id": "c101",
                                "title": "Replace logo"
                            },
                            {
                                "id": "c102",
                                "title": "Replace logo"
                            },
                            {
                                "id": "c103",
                                "title": "Replace logo"
                            },
                            {
                                "id": "c104",
                                "title": "Replace logo"
                            },
                            {
                                "id": "c105",
                                "title": "Replace logo"
                            },
                            {
                                "id": "c106",
                                "title": "Replace logo"
                            },
                            {
                                "id": "c107",
                                "title": "Replace logo"
                            },
                            {
                                "id": "c108",
                                "title": "Replace logo"
                            },
                            {
                                "id": "c109",
                                "title": "Replace logo"
                            },
                            {
                                "id": "c110",
                                "title": "Replace logo"
                            },
                            {
                                "id": "c111",
                                "title": "Replace logo"
                            },
                            {
                                "id": "c112",
                                "title": "Replace logo"
                            },
                            {
                                "id": "c113",
                                "title": "Replace logo"
                            },
                            {
                                "id": "c114",
                                "title": "Replace logo"
                            },
                            {
                                "id": "c115",
                                "title": "Replace logo"
                            },
                            {
                                "id": "c116",
                                "title": "Replace logo"
                            },
                            {
                                "id": "c117",
                                "title": "Replace logo"
                            },
                            {
                                "id": "c118",
                                "title": "Replace logo"
                            },
                            {
                                "id": "c119",
                                "title": "Replace logo"
                            },
                            {
                                "id": "c120",
                                "title": "Replace logo"
                            },
                            {
                                "id": "c121",
                                "title": "Replace logo"
                            },
                            {
                                "id": "c122",
                                "title": "Replace logo"
                            },
                            {
                                "id": "c123",
                                "title": "Replace logo"
                            },
                            {
                                "id": "c124",
                                "title": "Replace logo"
                            },
                            {
                                "id": "c125",
                                "title": "Add Samples"
                            }
                        ],
                        "style": {}
                    },
                    {
                        "id": "g102",
                        "title": "List 2",
                        "cards": [
                            {
                                "id": "c103",
                                "title": "Do that"
                            },
                            {
                                "id": "c104",
                                "title": "Help me",
                                "description": "description",
                                "comments": [
                                    {
                                        "id": "ZdPnm",
                                        "txt": "also @yaronb please CR this",
                                        "createdAt": 1590999817436.0,
                                        "byMember": {
                                            "_id": "u101",
                                            "fullname": "Tal Tarablus",
                                            "imgUrl": "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
                                        }
                                    }
                                ],
                                "checklists": [
                                    {
                                        "id": "YEhmF",
                                        "title": "Checklist",
                                        "todos": [
                                            {
                                                "id": "212jX",
                                                "title": "To Do 1",
                                                "isDone": false
                                            }
                                        ]
                                    }
                                ],
                                "members": [
                                    {
                                        "_id": "u101",
                                        "username": "Tal",
                                        "fullname": "Tal Tarablus",
                                        "imgUrl": "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
                                    }
                                ],
                                "labelIds": ["101"],
                                "createdAt": 1590999730348,
                                "dueDate": 16156215211,
                                "byMember": {
                                    "_id": "u101",
                                    "username": "Tal",
                                    "fullname": "Tal Tarablus",
                                    "imgUrl": "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
                                },
                                "style": {
                                    "bgColor": "#26de81"
                                }
                            }
                        ],
                        "style": {}
                    },
                    {
                        "id": "g103",
                        "title": "List 3",
                        "cards": [
                            {
                                "id": "c101",
                                "title": "Replace logo"
                            },
                            {
                                "id": "c102",
                                "title": "Add Samples"
                            }
                        ],
                        "style": {}
                    },
                    // {
                    //     "id": "g104",
                    //     "title": "List 4",
                    //     "cards": [
                    //         {
                    //             "id": "c101",
                    //             "title": "Replace logo"
                    //         },
                    //         {
                    //             "id": "c102",
                    //             "title": "Add Samples"
                    //         }
                    //     ],
                    //     "style": {}
                    // },

                ],
                "activities": [
                    {
                        "id": "a101",
                        "txt": "Changed Color",
                        "createdAt": 154514,
                        "byMember": {
                            "_id": "u101",
                            "fullname": "Abi Abambi",
                            "imgUrl": "http://some-img"
                        },
                        "task": {
                            "id": "c101",
                            "title": "Replace Logo"
                        }
                    }
                ]
            },


            // =================   board 2   ===============


            {
                "_id": "b102",
                "title": "BOARD 2",
                "createdAt": 1589983468418,
                "createdBy": {
                    "_id": "u101",
                    "fullname": "Abi Abambi",
                    "imgUrl": "http://some-img"
                },
                "style": {},
                "labels": [
                    {
                        "id": "l101",
                        "title": "Done",
                        "color": "#61bd4f"
                    }
                ],
                "members": [
                    {
                        "_id": "u101",
                        "fullname": "Matthias",
                        "imgUrl": "https://res.cloudinary.com/dymtestxz/image/upload/v1626731966/sprint4/spaces/4%20-%20Superbe%20chalet%20Hautes%20Vosges%20en%20pleine%20nature/reviewers/2627c314-c765-46ec-a8a0-6b2b3bd50042_rrkzx9.jpg"
                    },
                    {
                        "_id": "u102",
                        "fullname": "Vojta",
                        "imgUrl": "https://res.cloudinary.com/dymtestxz/image/upload/v1626731900/sprint4/spaces/4%20-%20Superbe%20chalet%20Hautes%20Vosges%20en%20pleine%20nature/reviewers/c69dc931-b7b4-44d9-9a2c-1227b4d713cf_bgsy9t.jpg"
                    },
                    {
                        "_id": "u103",
                        "fullname": "Martin",
                        "imgUrl": "https://res.cloudinary.com/dymtestxz/image/upload/v1626732348/sprint4/spaces/4%20-%20Superbe%20chalet%20Hautes%20Vosges%20en%20pleine%20nature/reviewers/dffd943e-3ac7-429c-bb7c-39226f969a5e_s8alpi.jpg"
                    }
                ],
                "lists": [
                    {
                        "id": "g101",
                        "title": "board 2",
                        "cards": [
                            {
                                "id": "c124",
                                "title": "Replace logo"
                            },
                            {
                                "id": "c125",
                                "title": "Add Samples"
                            }
                        ],
                        "style": {}
                    },
                    {
                        "id": "g102",
                        "title": "board 2 list 2",
                        "cards": [
                            {
                                "id": "c103",
                                "title": "Do that"
                            },
                            {
                                "id": "c104",
                                "title": "Help me",
                                "description": "description",
                                "comments": [
                                    {
                                        "id": "ZdPnm",
                                        "txt": "also @yaronb please CR this",
                                        "createdAt": 1590999817436.0,
                                        "byMember": {
                                            "_id": "u101",
                                            "fullname": "Tal Tarablus",
                                            "imgUrl": "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
                                        }
                                    }
                                ],
                                "checklists": [
                                    {
                                        "id": "YEhmF",
                                        "title": "Checklist",
                                        "todos": [
                                            {
                                                "id": "212jX",
                                                "title": "To Do 1",
                                                "isDone": false
                                            }
                                        ]
                                    }
                                ],
                                "members": [
                                    {
                                        "_id": "u101",
                                        "username": "Tal",
                                        "fullname": "Tal Tarablus",
                                        "imgUrl": "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
                                    }
                                ],
                                "labelIds": ["101"],
                                "createdAt": 1590999730348,
                                "dueDate": 16156215211,
                                "byMember": {
                                    "_id": "u101",
                                    "username": "Tal",
                                    "fullname": "Tal Tarablus",
                                    "imgUrl": "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
                                },
                                "style": {
                                    "bgColor": "#26de81"
                                }
                            }
                        ],
                        "style": {}
                    },
                    {
                        "id": "g103",
                        "title": "List 3",
                        "cards": [
                            {
                                "id": "c101",
                                "title": "Replace logo"
                            },
                            {
                                "id": "c102",
                                "title": "Add Samples"
                            }
                        ],
                        "style": {}
                    },
                    // {
                    //     "id": "g104",
                    //     "title": "List 4",
                    //     "cards": [
                    //         {
                    //             "id": "c101",
                    //             "title": "Replace logo"
                    //         },
                    //         {
                    //             "id": "c102",
                    //             "title": "Add Samples"
                    //         }
                    //     ],
                    //     "style": {}
                    // },

                ],
                "activities": [
                    {
                        "id": "a101",
                        "txt": "Changed Color",
                        "createdAt": 154514,
                        "byMember": {
                            "_id": "u101",
                            "fullname": "Abi Abambi",
                            "imgUrl": "http://some-img"
                        },
                        "task": {
                            "id": "c101",
                            "title": "Replace Logo"
                        }
                    }
                ]
            }





        ];

        storageService.postMany(BOARD_KEY, boards); //CLIENT STORAGE
        // utilService.saveToStorage(BOARD_KEY, boards); //SERVER STORAGE
    }
    return boards;
}

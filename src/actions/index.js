// 可能有很多個action
export const selectLibrary = (libraryId) => {
    // action create, automatically dispatch action
    return {
        type: 'select_library',
        payload: libraryId
    };
}

// export const selectionLibrary = (libraryId) => {
//     // action create, automatically dispatch action
//     return {
//         type: 'select_library',
//         payload: libraryId
//     };
// }

// export const selectionLibrary = (libraryId) => {
//     // action create, automatically dispatch action
//     return {
//         type: 'select_library',
//         payload: libraryId
//     };
// }
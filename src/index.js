// ログミドルウェア
const logger = store => next => action => {
    // Action適用前のstateを表示
    console.log(sore.getState());

    // Actionの種類を表示
    console.log(action);

    const result = next(action);

    // Action適用後のstateを表示
    console.log(store.getState());
    console.log('--------------------------------------');

    return result;
}
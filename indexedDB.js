/* store data with browser IndexedDB */
openRequest.onsuccess = (e) => {
    console.log("from success");
    let db = openRequest.result;
    // console.log("db ::: ", db);
    let transaction = db.transaction("t_employee", "readwrite");
    let storeObject = transaction.objectStore("t_employee");

    // let request = storeObject.put({
    //     // id: 101,
    //     name: "john sins",
    //     email: "johnsins@gmail.com"
    // }, 102);
    // console.log("request ::: ", request);

    // let request = storeObject.getAll();
    let request = storeObject.delete(102);

    request.onsuccess = (e) => {
        console.log(e.target.result);
    }
    request.onerror = (e) => {
        console.log(e.target.error);
    }
}

openRequest.onupgradeneeded = (e) => {
    console.log("upgrade needed");
    let db = openRequest.result;
    
    if(!db.objectStoreNames.contains('t_employee')){
        let store  = db.createObjectStore('t_employee', { keyPath: 'id'});
        // console.log("request ::: ", request);
        store .createIndex("name", "name", { unique: false });
        store .createIndex("email", "email", { unique: true });
    }
}

openRequest.onerror = (e) => {
    console.log("from error ::: ", e.target.error);
}
// Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        var firebaseConfig = {
            apiKey: "AIzaSyC8Mrrfx_zZxPAWhtB4xfvDrG9EZpnruSU",
            authDomain: "gymwebfirebase.firebaseapp.com",
            projectId: "gymwebfirebase",
            storageBucket: "gymwebfirebase.appspot.com",
            messagingSenderId: "1019476157862",
            appId: "1:1019476157862:web:4e80d631ff7fc280bd1b67",
            measurementId: "G-D2WG1GS65V"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
        firebase.analytics();
    console.log(firebase);

    const  uploadImage =async () =>{

      const ref = firebase.storage().ref();
      const file = document.querySelector("#photo").files[0];
      const name = +new Date() + "-" + file.name;
      const metadata = {
        contentType: file.type
      };
      const task = ref.child(name).put(file, metadata);
      task
        .then(snapshot => snapshot.ref.getDownloadURL())
        .then(url => {
          console.log(url);
          document.querySelector("#image").src = url;
        })
        .catch(console.error);
    }




        const  downloadImage =async (pathimage) =>{

            const storageRef = firebase.storage().ref();

            // Create a reference to the file we want to download
            var imgRef = storageRef.child(toString(pathimage));
            console.log(imgRef);
            // Get the download URL
            imgRef.getDownloadURL()
            .then((url) => {
            // Insert url into an <img> tag to "download"
            document.querySelector("#image").src = url;

            })
            .catch((error) => {
            // A full list of error codes is available at
            // https://firebase.google.com/docs/storage/web/handle-errors
            switch (error.code) {
            case 'storage/object-not-found':
            // File doesn't exist
            break;
            case 'storage/unauthorized':
            // User doesn't have permission to access the object
            break;
            case 'storage/canceled':
            // User canceled the upload
            break;

            // ...

            case 'storage/unknown':
            // Unknown error occurred, inspect the server response
            break;
            }
            });

            }

            module.exports = {
                uploadImage,
                downloadImage
              }
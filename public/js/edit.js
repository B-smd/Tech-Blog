
const editFormHandler = async function(event) {
    event.preventDefault();

    
    const titleEl = document.getElementById('post-title');
    const bodyEl = document.getElementById('post-body');
    const postId = document.getElementById('post-id').value;
    
    // const postId = document.querySelector('input[name="post-id"]').value;

    fetch("/api/post/" + postId.value, {
        method: "put", 
        body: JSON.stringify({
            title: titleEl.value,
            body: bodyEl.value
        }),
        headers: { "Content-Type": "application/json"}
    })
        .then(function() {
            document.location.replace("/dashboard");
        })
        .catch(err => console.log(err))
}

document.querySelector("#post-form").addEventListener("submit", editFormHandler);

const deletePostHandler = async function() {
    await fetch(`/api/post/${postId}`, {
        method: "DELETE"
    })
    document.location.replace("/dashboard");
}

document.querySelector("#delete-btn").addEventListener("click", deletePostHandler);
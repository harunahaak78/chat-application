const ChatRoom = () => {
    return(
        <div class="container-fluid vh-100 d-flex flex-column">


        {/* <!-- Main Content --> */}
        <div class="row flex-grow-1">
          {/* <!-- Sidebar --> */}
          <div class="col-3 bg-light border-end p-3">
            <h5>Rooms</h5>
            <ul class="list-group">
              <li class="list-group-item list-group-item-action active">General</li>
              <li class="list-group-item list-group-item-action">Tech</li>
              <li class="list-group-item list-group-item-action">Random</li>
            </ul>
          </div>

          {/* <!-- Chat Area --> */}
          <div class="col d-flex flex-column">
            {/* <!-- Messages --> */}
            <div class="flex-grow-1 p-3 overflow-auto bg-white" id="chat-messages">
              <div class="mb-3">
                <span class="badge bg-secondary">User1</span>
                <p class="bg-light p-2 rounded">Hello!</p>
              </div>
              <div class="mb-3 text-end">
                <span class="badge bg-primary">You</span>
                <p class="bg-primary text-white p-2 rounded">Hi there!</p>
              </div>
            </div>
      {/* 
            <!-- Input Box --> */}
            <div class="p-3 bg-light border-top">
              <div class="input-group">
                <input type="text" class="form-control" placeholder="Type a message..." />
                <button class="btn btn-primary">Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
}

export default ChatRoom;
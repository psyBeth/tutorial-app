import React from 'react'

const EditTutorial = () => {
  return (
    <>
    <button variant="primary" onclick="{handleShow}">
    Launch demo modal
  </button>
  <modal show="{show}" onhide="{handleClose}">
    <modal.header closebutton="">
      <modal.title>Modal heading</modal.title>
    </modal.header>
    <modal.body>Woohoo, you are reading this text in a modal!</modal.body>
    <modal.footer>
      <button variant="secondary" onclick="{handleClose}">
        Close
      </button>
      <button variant="primary" onclick="{handleClose}">
        Save Changes
      </button>
    </modal.footer>
  </modal>
    </>
  )
}

export default EditTutorial
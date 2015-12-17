// The initial state
const initialState = {
  title: 'Congratulations!',
  desc: '<p>You are now ready to begin your new ReactJS application.</p><p>To get started, visit the <a href="http://facebook.github.io/react/" target="_blank">ReactJS</a> website.</p>',
  footnote: 'Got a feedback or suggestion to this starter kit? <a href="https://twitter.com/tranvu/" target="_blank">Send me a tweet.</a>',
}

/**
 * This is the reducer function for the "data" property in our application's state tree
 *
 * @param array state           An array of todo items
 * @param object action         The action that is to be performed
 * @return array
 */
export default function data(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        { name: action.name }
      ]
    default:
      return state
  }
}

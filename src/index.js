/**
 * @type {Object} Tag
 * @property {string} id - todo tag id (required)
 * @property {string} name - todo tag name (required)
 */

/**
 * @type {Object} Todo
 * @property {string} id - todo id (required)
 * @property {string} content - todo content (required)
 * @property {boolean} isCompleted - When todo is completed return true. When todo is not completed return false. (required)
 * @property {string} category - todo category (required)
 * @property {Tag[]} tags - todo tag array (optional)
 */

/**
 * @function createTodo
 * @param {string} todo.content - todo content (required)
 * @param {string} todo.category - todo category (required)
 * @param {Tag[]} todo.tags - todo tag array (optional)
 */

function createTodo({ content, category, tags }) {}

/**
 * @function readTodo
 * @param {string} todo.id - todo id (required)
 */
function readTodo(id) {}

/**
 * @function updateTodo
 * @param {string} todo.id - todo id (required)
 * @param {string} todo.content - todo content (required)
 * @param {boolean} todo.isCompleted - When todo is completed return true. When todo is not completed return false. (required)
 * @param {string} todo.category - todo category (required)
 * @param {Tag[]} todo.tags - todo tag array (optional)
 */
function updateTodo({ id, content, isCompleted, category, tags }) {}

/**
 * @function deleteTodo
 * @param {string} todo.id - todo id (required)
 * @param {string} todo.category - todo category (optional)
 * @param {Tag[]} todo.tags - todo tag array (optional)
 */
function deleteTodo({ id, category, tags }) {}

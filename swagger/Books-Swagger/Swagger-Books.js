
/**
 * @swagger
 *    paths :
 *       /book/create :
 *          post :
 *              summary : Create Book
 *              tags : [Books]
 *              parameters :
 *                - name : authentication
 *                  in : header
 *                  description : Bearer Token
 *                  required : true
 *              requestBody :
 *                  content :
 *                      application/json :
 *                          schema :
 *                              type : object
 *                              required :
 *                                  - name
 *                                  - pageCount
 *                              properties :
 *                                  name :
 *                                      type : string
 *                                  pageCount :
 *                                      type : string
 *              responses :
 *                  201 :
 *                      description : Created Book
 *                      content :
 *                          application/json :
 *                              schema :
 *                                  $ref : "#components/schemas/books"
 */


/**
 * @swagger
 *    paths :
 *       /book/all :
 *          get :
 *              summary : All Books
 *              tags : [Books]
 *              parameters :
 *                - name : authentication
 *                  in : header
 *                  description : User Bearer Token
 *                  required : true
 *              responses :
 *                  201 :
 *                      description : Created Book
 *                      content :
 *                          application/json :
 *                              schema :
 *                                  $ref : "#components/schemas/books"
 */



/**
 * @swagger
 *    paths :
 *       /book/update/{id} :
 *          patch :
 *              summary : Update Book
 *              tags : [Books]
 *              parameters :
 *                - name : authentication
 *                  in : header
 *                  description : Bearer Token
 *                  required : true
 *                - name : id
 *                  in : path
 *                  description : book ID
 *                  required : true
 *              requestBody :
 *                  content :
 *                      application/json :
 *                          schema :
 *                              type : object
 *                              properties :
 *                                  name :
 *                                      type : string
 *                                  pageCount :
 *                                      type : string
 *              responses :
 *                  200 :
 *                      description : Book Updated
 *                      content :
 *                          application/json :
 *                              schema :
 *                                  $ref : "#components/schemas/books"
 */


/**
 * @swagger
 *    paths :
 *       /book/delete/{id} :
 *          delete :
 *              summary : Delete Book
 *              tags : [Books]
 *              parameters :
 *                - name : authentication
 *                  in : header
 *                  description : Bearer Token
 *                  required : true
 *                - name : id
 *                  in : path
 *                  description : book ID
 *                  required : true
 *              responses :
 *                  200 :
 *                      description : Book Deleted
 *                      content :
 *                          application/json :
 *                              schema :
 *                                  $ref : "#components/schemas/books"
 *                  404 : 
 *                      description : Book Not Found
 */


/**
 * @swagger
 *    paths :
 *       /book/user :
 *          get :
 *              summary : Find All Books By User
 *              tags : [Books]
 *              parameters :
 *                - name : authentication
 *                  in : header
 *                  description : Bearer Token
 *                  required : true
 *              responses :
 *                  200 :
 *                      description : All User Books
 *                      content :
 *                          application/json :
 *                              schema :
 *                                  $ref : "#components/schemas/books"
 */


/**
 * @swagger
 *    paths :
 *       /book/{id} :
 *          get :
 *              summary : Get Book By ID
 *              tags : [Books]
 *              parameters :
 *                - name : id
 *                  in : path
 *                  description : Book ID
 *                  required : true
 *              responses :
 *                  200 :
 *                      description : The Books
 *                      content :
 *                          application/json :
 *                              schema :
 *                                  $ref : "#components/schemas/books"
 *                  404 :
 *                      description : Book With This ID Not Found
 */

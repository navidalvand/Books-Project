/**
 * @swagger
 *    paths :
 *       /user/all :
 *          get :
 *              summary : Get All Users
 *              tags : [Users]
 *              parameters :
 *                - name : authentication
 *                  in : header
 *                  description : User Bearer Token
 *                  required : true
 *              responses :
 *                  200 :
 *                      description : All Users 
 *                      content :
 *                          application/json :
 *                              schema :
 *                                  $ref : "#components/schemas/users"
 */


/**
 * @swagger
 *    paths :
 *       /user/change-account :
 *          patch :
 *              summary : Switch Account To Athor Account Or User
 *              tags : [Users]
 *              parameters :
 *                - name : authentication
 *                  in : header
 *                  description : Bearer Token
 *                  required : true
 *              responses :
 *                  200 :
 *                      description : All Users 
 *                      content :
 *                          application/json :
 *                              schema :
 *                                  $ref : "#components/schemas/users"
 */


/**
 * 
 * @swagger
 *    paths :
 *       /user/profile/{id} :
 *          get :
 *              summary : Get User Profile By ID
 *              tags : [Users]
 *              parameters :
 *                - name : authentication
 *                  in : header
 *                  description : User Bearer Token
 *                  required : true
 *                - name : id
 *                  in : path
 *                  description : User ID
 *              responses :
 *                  200 :
 *                      description : The User
 *                      content :
 *                          application/json :
 *                              schema :
 *                                  $ref : "#components/schemas/users"
 */

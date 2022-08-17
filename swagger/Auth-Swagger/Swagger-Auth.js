/**
 * @swagger
 *    paths :
 *       /auth/register :
 *          post :
 *              summary : Register User Account
 *              tags : [Authentication]
 *              requestBody :
 *                  content :
 *                     application/json :
 *                         schema :
 *                             type : object
 *                             required :
 *                               - name 
 *                               - username
 *                               - password
 *                               - confirm_password
 *                             properties :
 *                               name : 
 *                                   type : string
 *                               username : 
 *                                   type : string
 *                               password : 
 *                                   type : string
 *                               confirm_password :
 *                                   type : string
 *                               author : 
 *                                   type : boolean
 *              responses :
 *                  200 :
 *                      description : User Account Created 
 *                      content :
 *                          application/json :
 *                              schema :
 *                                  $ref : "#components/schemas/users"
 *                  400 :
 *                      description : Failed To Create User Account
 */


/**
 * @swagger
 *    paths :
 *       /auth/login :
 *          post :
 *              summary : Login Into Account
 *              tags : [Authentication]
 *              requestBody :
 *                  content :
 *                     application/json :
 *                         schema :
 *                             type : object
 *                             required :
 *                               - username
 *                               - password
 *                             properties :
 *                               username : 
 *                                   type : string
 *                               password : 
 *                                   type : string
 *              responses :
 *                  200 :
 *                      description : User Loged In 
 *                      content :
 *                          application/json :
 *                              schema :
 *                                  $ref : "#components/schemas/users"
 *                  400 :
 *                      description : Failed To Login 
 */


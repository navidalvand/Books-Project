
/**
 * @swagger
 *    paths :
 *       /comment/add/{id} :
 *          post :
 *              summary : Add Commnent
 *              tags : [Comments]
 *              parameters :
 *                - name : authentication
 *                  in : header
 *                  description : User Bearer Token
 *                  required : true
 *                - name : id
 *                  in : path
 *                  description : Book ID
 *                  required : true
 *              requestBody :
 *                  content :
 *                      application/json :
 *                          schema :
 *                              type : object
 *                              properties :
 *                                  text :
 *                                      type : string
 *                                      required : true
 *              responses :
 *                  201 :
 *                      description : Added Comment
 *                      content :
 *                          application/json :
 *                              schema :
 *                                 $ref : "#components/schemas/comments"
 */


/**
 * @swagger
 *    paths :
 *       /comment/accept/{id} :
 *          patch :
 *              summary : Accept Commnent
 *              tags : [Comments]
 *              parameters :
 *                - name : authentication
 *                  in : header
 *                  description : User Bearer Token
 *                  required : true
 *                - name : id
 *                  in : path
 *                  description : Comment ID
 *                  required : true
 *              responses :
 *                  201 :
 *                      description : Comment Accepted
 *                      content :
 *                          application/json :
 *                              schema :
 *                                 $ref : "#components/schemas/comments"
 */


/**
 * @swagger
 *    paths :
 *       /comment/reject/{id} :
 *          patch :
 *              summary : Reject Comment
 *              tags : [Comments]
 *              parameters :
 *                - name : authentication
 *                  in : header
 *                  description : User Bearer Token
 *                  required : true
 *                - name : id
 *                  in : path
 *                  description : Comment ID
 *                  required : true
 *              responses :
 *                  201 :
 *                      description : Comment Rejected
 *                      content :
 *                          application/json :
 *                              schema :
 *                                 $ref : "#components/schemas/comments"
 */

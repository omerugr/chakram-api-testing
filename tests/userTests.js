const chakram = require('chakram'), expect = chakram.expect;
    

describe("User Tests", function () {

    it("GET /v2/user/{userName}", function () {
        const response = chakram.get("https://petstore.swagger.io/v2/user/dries34");
        expect(response).to.have.status(200);
        return chakram.wait();
    });


    it("GET /v2/user/logout", function () {
        const response = chakram.get("https://petstore.swagger.io/v2/user/logout");
        expect(response).to.have.status(200);
        return chakram.wait();
    });


    it("GET /v2/user/login", function () {
        const response = chakram.get("https://petstore.swagger.io/v2/user/login?username=test&password=gs1905");
        expect(response).to.have.status(200);
        return chakram.wait();
    });
    

    it("POST /v2/user userCreate", function () {
        const data = {
            "id": 148971461486,
            "username": "dries34",
            "firstName": "dries",
            "lastName": "mertens",
            "email": "driesmertens34@gmail.com",
            "password": "gs1905",
            "phone": "9816846",
            "userStatus": 0
          };

          const resData = {
            "code": 200,
            "type": "unknown",
            "message": "148971461486"
          };

        const response = chakram.post("https://petstore.swagger.io/v2/user", data);
        
        return response.then(function (res){
            
            expect(res).to.have.status(200);
            expect(res).to.have.json(resData);
        })
    });


    it("PUT /v2/user userUpdate", function () {
        const data = {
            "id": 148971461486,
            "username": "dries34",
            "firstName": "dries",
            "lastName": "mertens",
            "email": "driesmertens34@gmail.com",
            "password": "gs1905",
            "phone": "9816846",
            "userStatus": 0
          };

        const response = chakram.put("https://petstore.swagger.io/v2/user/dries34", data);
        
        return response.then(function (res){
            
            expect(res).to.have.status(200);
        })
    });
    

    it("DELETE /v2/user/{username}", function () {
        const response = chakram.delete("https://petstore.swagger.io/v2/user/dries34");
        expect(response).to.have.status(200);
        return chakram.wait();
    });


});
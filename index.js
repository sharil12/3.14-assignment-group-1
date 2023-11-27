module.exports.handler = async (event) => {
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: "Welcome to Group 1", Our group members are Ramesh, Zhi Min, Dior, Sharil & Caroline 
        },
        null,
        2
      ),
    };
  };

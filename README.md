# API Base URLs

## https://tutorial-api.fullstack.clarusway.com/

### API ENDPOINTS

- GET `tutorials/` get all Tutorials
- GET `tutorials/:id/` get Tutorial by id
- POST `tutorials/` add new Tutorial
- PUT `tutorials/:id/` update Tutorial by id
- PATCH `tutorials/:id/` patch Tutorial by id
- DELETE `tutorials/:id/` remove Tutorial by id
- DELETE `tutorials/` remove all Tutorials

# Deployed Frontend

## https://tutorial.fullstack.clarusway.com/


## https://react.dev/reference/react/useState#usestate

- Value of State variable, initialState with 1st render gets the initial value of the parameter.
- Therefore in this case the first value from prop is transferred to state.
- Props values ​​that change later are not transferred to useState.
- If we want to transfer the values ​​from props to useState at every change, we can use the useEffect hook like componentDidUpdate.
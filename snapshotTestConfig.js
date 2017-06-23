module.exports = {
  componentDefinitions: {
    'components': [
      'App',
      'Head',
      'ReviewBody' // Causes './components/MySimpleConstantComponent' to be imported 
                                   // and generates a snapshot test for <MySimpleConstantComponent /> 
    ],
 
  },
  autoMocks: ['TextInput'], // Optional: automatically generate simple mocks. Particularly useful 
                            // for React Native. 
}
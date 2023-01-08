module.exports = {
    "env": {
         node: true,
         browser: true,
          es6: true,
           "jquery": true,
           
    },
    "globals": {
        
        "_": "readonly",
        
    },
    "extends": [
         "airbnb",
         "eslint:recommended",
        "plugin:react/recommended",
    ],
    "overrides": [
        
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
         "dollar-sign",
        "react",
        "@typescript-eslint",
        
    ],
    
    "rules": {
          
        "dollar-sign/dollar-sign": [2, "ignoreProperties"],

    }
}

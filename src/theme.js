import {createTheme} from '@mui/material/styles';



export const shades = {


    black: {
        100: "#cccccc",
        200: "#999999",
        300: "#666666",
        400: "#333333",
        500: "#000000",
        600: "#000000",
        700: "#000000",
        800: "#000000",
        900: "#000000"
    },
    blue: {
      100: "#cccce6",
      200: "#9999cc",
      300: "#6666b3",
      400: "#333399",
      500: "#000080",
      600: "#000066",
      700: "#00004d",
      800: "#000033",
      900: "#00001a"
  },
  


    red: {
        100: "#f7ccd2",
        200: "#ef99a4",
        300: "#e66677",
        400: "#de3349",
        500: "#d6001c",
        600: "#ab0016",
        700: "#800011",
        800: "#56000b",
        900: "#2b0006"
    },
    grey: {
        100: "#f2f2f2",
        200: "#e4e4e4",
        300: "#d7d7d7",
        400: "#c9c9c9",
        500: "#bcbcbc",
        600: "#969696",
        700: "#717171",
        800: "#4b4b4b",
        900: "#262626"
    },
    
    
    yellow: {
        100: "#f5f5f5",
        200: "#ecebeb",
        300: "#e2e1e1",
        400: "#d9d7d7",
        500: "#cfcdcd",
        600: "#a6a4a4",
        700: "#7c7b7b",
        800: "#535252",
        900: "#292929"
    }

}


export const theme = createTheme({


    palette: {
    
    
      black:{
         main: shades.black[500]
    
      }, 
      red:{
    
        main: shades.red[500]
      }, 
    
      grey: {
    
        main: shades.grey[500], 
        light: shades.grey[100], 
        dark: shades.grey[700]
      }, 
      neutral:{
    
        dark: shades.yellow[700], 
        main: shades.yellow[500],
        light: shades.yellow[100]
      }, 
      
    
    }, 
    typography:{
    
       fontFamily: ['Open Sans', 'sans-serif'].join(","), //this will just combine these values into one string
       fontSize: 12 ,     //there is mui component called typography & in typigraphy we can change variant 
                           //to be one of those values h1, h2, h3, h4
    
       h1: {
        fontFamily: ["Open Sans", "sans-serif"].join(","), 
        fontSize: 48
    
       }, 
       h2: {
        fontFamily: ["Open Sans", "sans-serif"].join(","), 
        fontSize: 36
    
       }, 
       h3: {
        fontFamily: ["Open Sans", "sans-serif"].join(","), 
        fontSize: 20
    
       }, 
       h4: {
        fontFamily: ["Open Sans", "sans-serif"].join(","), 
        fontSize: 14
    
       }, 
    
    }
    
    
    })
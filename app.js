window.onload=function(){
    main()
}

const dataObject = {
    area:{
        name:'Area',
        unit:{
            squarekm :"Square Killomiter",
            squareM: "Square Meter",
            squareMile : "Square Mile",
            squareFoot : "Square Foot"

        },

        variants :{
            'squarekm:squareM':{
                formula :'multiply the area value by 1e+6',
                calculation(n){

                    return n * 1000000;

                }
            },
            'squarekm:squareMile':{
                formula :'divide the area value by 2.59',
                calculation(n){

                    return n / 2.59;

                }
            },
            'squarekm:squareFoot':{
                formula :'for an approximate result, multiply the area value by 1.10760000',
                calculation(n){

                    return n * 10760000;

                }
            },
            'squareM:squarekm':{
                formula :'multiply the area value by 1e+6',
                calculation(n){

                    return n * 1000000;

                }
            },
            'squareM:squareMile':{
                formula :'divide the area value by 2.59e+6',
                calculation(n){

                    return n / 2590000;

                }
            },
            'squareM:squareFoot':{
                formula :'multiply the area value by 10.764',
                calculation(n){

                    return n * 10.764;

                }
            },
            'squareMile:squarekm':{
                formula :'multiply the area value by 2.59',
                calculation(n){

                    return n * 2.59;

                }
            },
            'squareMile:squareM':{
                formula :'multiply the area value by 2.59e+6',
                calculation(n){

                    return n * 2590000;

                }
            },
            'squareMile:squareFoot':{
                formula :'for an approximate result, multiply the area value by 2.788e+7',
                calculation(n){

                    return n * 27880000;

                }
            },
            'squareFoot:squarekm':{
                formula :'for an approximate result, divide the area value by 1.076e+7',
                calculation(n){

                    return n / 10760000;

                }
            },
            'squareFoot:squareM':{
                formula :'divide the area value by 10.764',
                calculation(n){

                    return n / 10.764;

                }
            },
            'squareFoot:squareMile':{
                formula :'for an approximate result, divide the area value by 2.788e+7',
                calculation(n){

                    return n / 27880000;

                }
            },
        }
    },
    length:{
        name:'Length',
        unit:{
            kilometer :"Killomiter",
            centimeter: "Centimeter",
            milimeter : "Milimeter",
            inch : "Inch",
            foot:"Foot"

        },
        variants:{
            'kilometer:centimeter':{
                 formula :'multiply the length value by 100000',
                calculation(n){

                    return n * 100000;

                }
            },
            'kilometer:milimeter':{
                 formula :'multiply the length value by 1e+6',
                calculation(n){

                    return n * 1000000;

                }
            },
            'kilometer:inch':{
                 formula :'for an approximate result, multiply the length value by 39370',
                calculation(n){

                    return n * 393770;

                }
            },
            'kilometer:foot':{
                 formula :'for an approximate result, multiply the length value by 3281',
                calculation(n){

                    return n * 3281;

                }
            },

            'centimeter:kilometer':{
                 formula :'divide the length value by 100000',
                calculation(n){

                    return n / 100000;

                }
            },
            'centimeter:milimeter':{
                 formula :'multiply the length value by 10',
                calculation(n){

                    return n * 10;

                }
            },
            'centimeter:inch':{
                 formula :'divide the length value by 2.54',
                calculation(n){

                    return n / 2.54;

                }
            },
            'centimeter:foot':{
                 formula :'divide the length value by 30.48',
                calculation(n){

                    return n / 30.48;

                }
            },

            'milimeter:kilometer':{
                 formula :'divide the length value by 1e+6',
                calculation(n){

                    return n / 1000000;

                }
            },
            'milimeter:centimeter':{
                 formula :'divide the length value by 10',
                calculation(n){

                    return n / 10;

                }
            },
            'milimeter:inch':{
                 formula :'divide the length value by 25.4',
                calculation(n){

                    return n / 25.4;

                }
            },
            'milimeter:foot':{
                 formula :'divide the length value by 304.8',
                calculation(n){

                    return n / 304.8;

                }
            },

            'inch:kilometer':{
                 formula :'for an approximate result, divide the length value by 39370',
                calculation(n){

                    return n / 39370;

                }
            },
            'inch:centimeter':{
                 formula :'multiply the length value by 2.54',
                calculation(n){

                    return n * 2.54;

                }
            },
            'inch:milimeter':{
                 formula :'multiply the length value by 25.4',
                calculation(n){

                    return n * 25.4 ;

                }
            },
            'inch:foot':{
                 formula :'divide the length value by 12',
                calculation(n){

                    return n / 12;

                }
            },

            'foot:kilometer':{
                 formula :'for an approximate result, divide the length value by 3281',
                calculation(n){

                    return n / 3281;

                }
            },
            'foot:centimeter':{
                 formula :'multiply the length value by 30.48',
                calculation(n){

                    return n / 30.48;

                }
            },
            'foot:milimeter':{
                 formula :'multiply the length value by 304.8',
                calculation(n){

                    return n * 304.8;

                }
            },
            'foot:inch':{
                 formula :'multiply the length value by 12',
                calculation(n){

                    return n * 12;

                }
            },
           
        }

    },
    mass:{
        name:'Mass',
        unit:{
            kilogram :"Kilogram",
            gram: "Gram",
            tone : "Tone",
            pound : "Pound",
        },
        variants:{
            'kilogram:gram':{
                formula :'multiply the mass value by 1000',
                calculation(n){

                    return n * 1000;

                }
            },
            'kilogram:tone':{
                formula :'divide the mass value by 1000',
                calculation(n){

                    return n / 1000;

                }
            },
            'kilogram:pound':{
                formula :'for an approximate result, multiply the mass value by 2.205',
                calculation(n){

                    return n * 2.205;

                }
            },

            'gram:kilogram':{
                formula :'divide the mass value by 1000',
                calculation(n){

                    return n / 1000;

                }
            },
            'gram:tone':{
                formula :'divide the mass value by 1e+6',
                calculation(n){

                    return n * 1000000;

                }
            },
            'gram:pound':{
                formula :'for an approximate result, divide the mass value by 453.6',
                calculation(n){

                    return n / 453.6;

                }
            },

            'tone:kilogram':{
                formula :'multiply the mass value by 1000',
                calculation(n){

                    return n * 1000;

                }
            },
            'tone:gram':{
                formula :'multiply the mass value by 1e+6',
                calculation(n){

                    return n * 1000000;

                }
            },
            'tone:pound':{
                formula :'for an approximate result, multiply the mass value by 2205',
                calculation(n){

                    return n * 2205;

                }
            },
            
            'pound:kilogram':{
                formula :'for an approximate result, divide the mass value by 2.205',
                calculation(n){

                    return n / 2.205;

                }
            },
            'pound:gram':{
                formula :'for an approximate result, multiply the mass value by 453.6',
                calculation(n){

                    return n * 453.6;

                }
            },
            'pound:tone':{
                formula :'for an approximate result, divide the mass value by 2205',
                calculation(n){

                    return n / 2205;

                }
            },
        }
    },
  
}

//All ref==================
const root_select_option = document.getElementById('root_select_option')
const left_option = document.getElementById('left_option')
const right_option = document.getElementById('right_option')
const left_input_box = document.getElementById('left_input_box')
const right_input_box = document.getElementById('right_input_box')
const formula_text =document.getElementById('formula_text')

let selectedLeftOption = ''
let selectedRightOption = ''
left_input_box.value=1



//main function =======start========
function main(){
const convaterobj = Object.keys(dataObject).sort()

convaterobj.forEach((item)=>{
    generateOption(root_select_option,{value:item, text: dataObject[item].name})

})

root_select_option.value = 'area';

// Call function to update options based on default value ('area')
cetagoriOptionChanges('area');




root_select_option.addEventListener('change', (e) => {

     const root_option_selected = e.target.value;
   
    cetagoriOptionChanges(root_option_selected)
   
  
});


left_option.addEventListener('change', function(event){
    if(event.target.value === right_option.value){
        let option = right_option.getElementsByTagName("option")
        for(let i =0; i < option.length; i++){
           if(selectedLeftOption === option[i].value){
            option[i].selected=true;
            selectedLeftOption=option[i].value
           }
        }

        selectedLeftOption= event.target.value;
    }
    calculator()
})
right_option.addEventListener('change', function(event){
    if(event.target.value === left_option.value){
        let option = left_option.getElementsByTagName("option")
        for(let i =0; i < option.length; i++){
           if(selectedRightOption === option[i].value){
            option[i].selected=true;
            selectedRightOption=option[i].value
           }
        }
        selectedLeftOption= event.target.value;
    }
    calculator()
})

left_input_box.addEventListener('keyup',function(e){
    if(!isNaN(e.target.value)){
        calculator()
    }
})



function calculator (){
    const option = root_select_option.value
    const variants = dataObject[option].variants;
    const variantsKey = `${left_option.value}:${right_option.value}`
    const varant = variants[variantsKey]
    formula_text.innerText=varant.formula

    const left_value = left_input_box.value
    right_input_box.value=varant.calculation(left_value)
}



}

//main function =======end========

//option generate function==============

function generateOption (parent, option){
    const opt = document.createElement('option')
    opt.setAttribute('value', option.value)

    opt.innerText=option.text
    parent.appendChild(opt)
}
//option generate function==============

//option cetagori change function===========
function cetagoriOptionChanges(option){
    const convaterobj = dataObject[option].unit;
    const unitKey = Object.keys(convaterobj);

   
    left_option.innerHTML = ''; 
    right_option.innerHTML = '';
    

    unitKey.forEach((item) => {
        generateOption(left_option, { value: item, text: convaterobj[item] });
     
    });
    unitKey.forEach((item) => {
        generateOption(right_option, { value: item, text: convaterobj[item] });
       

    });
    right_option.options[1].selected = true;
//defult left option value  and defult right option value 

    left_option.value= unitKey[0]
    selectedLeftOption=left_option.value

    right_option.value= unitKey[1]
    selectedRightOption=right_option.value
   
}

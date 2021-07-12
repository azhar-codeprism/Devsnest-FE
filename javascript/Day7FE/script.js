let sampleObject = { name : "David Rayy", sclass : "VI", rollno : 12 };
let library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }];

function listProperties(obj){
    for (key in obj){
        console.log(key)
    }
}

function deleteProp(obj,prop){
    console.log("before deletion\n", obj)
    if (prop in obj){
        delete obj.prop
        console.log("after deletion\n", obj)
    }
    else{
        console.log("Enter a valid property to be deleted")
    }
}

function getObjectLength(obj){
   return Object.keys(obj).length
}
function getReadingStatus(library){
    for (i in library){
        console.log(`The reading status of ${library[i].title} is ${library[i].readingStatus}`)
    }
}

function cylinder(height, diameter) {
    this.height = height;
    this.diameter = diameter;
    }
  
  cylinder.prototype.Volume = function () {
    let radius = this.diameter / 2;
    return this.height * Math.PI * radius**2;
    };
    
function calculateVolume(height, diameter){
    let cyl = new cylinder(height, diameter);
    console.log('volume of cylinder =', cyl.Volume().toFixed(4));
    }
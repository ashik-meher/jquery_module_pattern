
$(document).ready(function(){
    console.log('ready');

    var $inputElement = $('<input>').attr('type', 'text');

    $('.container').append($inputElement);

    var $addBtn = $('<button> </button>').attr('id', 'addBtn').html('Add');

    $('.container').append($addBtn);

    var $emptyBtn = $('<button> </button>').attr('id', 'emptyBtn').html('Empty');

    $('.container').append($emptyBtn);

    $addBtn.on('click', function(){
        $('.container').append($('<input>').attr('type', 'text').addClass('form-input'));
    })

    $emptyBtn.on('click', function(){
        $('.container').empty();
    })

    $.ajax({
        url: 'data/refugees.json',
        method:'GET',
        async:true,
        success: function(data){

            console.log('Data:', data);

            $.map(data.data, function(obj, index){
                console.log(index,obj);

                $('.container').append($('<p></p>').addClass('user-info').html(obj.name));
            })

        },
        error: function(err){
            console.log('Error:', err);
        },
        complete: function(){
            console.log('Completed');
        }
    })

// IIFE

var packageFeature = (function(){

    var privateAttr = "Pacakges";

    var initMsg = "Initialized";

    var privateMethod = function(){

        return privateAttr;

    }

    return {
        publicMethod: function(){
            return privateMethod();
        },
        init: function(){

            return privateMethod();

        }
    }

})();
//




console.log(packageFeature.publicMethod());
console.log(packageFeature.init());

var caseFile = {
    id: 1,
    parties: "Balmiki vs The State",
    getParties: function(){
        return this.parties;
    }
}

console.log(caseFile.getParties());

console.log(caseFile.toString());

console.log(caseFile.__proto__);

console.log(Object.getPrototypeOf(caseFile));

})


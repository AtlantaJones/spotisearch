
(function(){

    var ssQuery = '';

    // The form
    var $ssForm =               $('#ssForm');
    var $inputYearStart =    $('#yearStart');
    var $inputYearEnd =     $('#yearEnd');
    var $inputArtist =          $('#artist');
    var $inputTrack =          $('#track');
    var $inputAlbum =          $('#album');
    var $inputGenre =           $('#genre');
    var $ssResult =             $('#ssResult');


    var processYears = function() {
        var output = 'year:' + $inputYearStart.val();
        
        // was an ending year specified?
        if($inputYearEnd.val() !== '') {
            output += '-' + $inputYearEnd.val();
        }
        return output + ' ';
    }


    var processArtist = function() {
        var output = 'artist:"' + $inputArtist.val() + '"';
        return output + ' ';
    }


    var processGenre = function() {
        var output = 'genre:"' + $inputGenre.val() + '"';
        return output + ' ';
    }


    var processTrack = function() {
        var output = 'track:"' + $inputTrack.val() + '"';
        return output + ' ';
    }


    var processAlbum = function() {
        var output = 'album:"' + $inputAlbum.val() + '"';
        return output + ' ';
    }


    $(document).ready(function() {

        $inputGenre.autocomplete({
                source: genreList
            });

        $ssForm.on('submit', function(e) {
            e.preventDefault();
            ssQuery = '';

            // if year fields have data, process them.
            if($inputYearStart.val() !== '') {
                ssQuery += processYears();
            }

            if($inputArtist.val() !== '') {
                ssQuery += processArtist();
            }

            if($inputGenre.val() !== '') {
                ssQuery += processGenre();
            }

            if($inputTrack.val() !== '') {
                ssQuery += processTrack();
            }

            if($inputAlbum.val() !== '') {
                ssQuery += processAlbum();
            }

            $ssResult.html(ssQuery);

        });


    });



})();





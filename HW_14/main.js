document.addEventListener("DOMContentLoaded", function () {
    var isSideBarOn = true;
    document.getElementById('sideBarToggleButton').addEventListener('click', function () {
        if (isSideBarOn) {
            isSideBarOn = false;
            document.getElementsByClassName('side-bar')[0].style.display = 'none';
            document.getElementsByClassName('page')[0].classList.remove('page_side-bar');
        } else {
            isSideBarOn = true;
            document.getElementsByClassName('side-bar')[0].style.display = 'block';
            document.getElementsByClassName('page')[0].classList.add('page_side-bar');
        }
    });
});

function createTable() {
    var num_rows = document.getElementById('rows').value;
    var num_cols = document.getElementById('cols').value;
    var theader = '<table align="center" id="tblMain" border="1" style="cursor: pointer;">\n';
    var tbody = '';

    for( var i=0; i<num_rows;i++)
    {
        tbody += '<tr>';
        for( var j=0; j<num_cols;j++)
        {
            tbody += '<td style="padding: 5px;" onclick="event()">';
            tbody += ' ';
            tbody += '</td>'
        }
        tbody += '</tr>\n';
    }
    var tfooter = '</table>';
    document.getElementById('wrapper').innerHTML = theader + tbody + tfooter;
    var tbl = document.getElementById("tblMain");
    if (tbl != null) {
        for (var i = 0; i < tbl.rows.length; i++) {
            for (var j = 0; j < tbl.rows[i].cells.length; j++) {
                tbl.rows[i].cells[j].onclick = (function (i, j) {
                    return function () {
                        alert('R' + (i + 1) + 'C' + (j + 1));
                    };
                }(i, j));
            }
        }
    }
}

//resize
var refID;
window.onresize = function() {
    clearTimeout(refID);
    refID = setTimeout(function() {
        var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth; 
        var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        console.log("Browser inner window width: " + w + ", height: " + h + ".");
    }, 2000);
};

//time
function showTime() {
    var date = new Date();
  
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
  
    function time(interval) {
      return (interval < 10) ? '0' + interval : interval;
    }
  
    var hoursPlace = document.getElementById("hours_id"),
        minutes_place = document.getElementById("minutes_id"),
        seconds_place = document.getElementById("seconds_id");
  
    if (hoursPlace.textContent !== time(hours)) {
      hoursPlace.textContent = time(hours);
    }
  
    if (minutes_place.textContent !== time(minutes)) {
      minutes_place.textContent = time(minutes);
    }
  
    if (seconds_place.textContent !== time(seconds)) {
      seconds_place.textContent = time(seconds);
    }
  
    setTimeout(showTime, 1000);
}
showTime();
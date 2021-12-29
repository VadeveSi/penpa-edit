/*
 * This file contains the code to communicate the puzzle to a server back-end containing a solver.
 * Author: Simon Vandevelde <s.vandevelde@kuleuven.be>
 */ 

/*
 * Post request
 */
function doPost(json) {

  const url = "localhost";
  var xhr = new XMLHttpRequest();
  xhr.open("POST", '', true);
  xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8');

  xhr.send(JSON.stringify(json));
  console.log(json);
  xhr.onloadend = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log(xhr.responseText);
      const json = JSON.parse(xhr.responseText);
      console.log(json['numbers']);
      pu.pu_q.number = json['numbers'];
      pu.mode_qa('pu_a');
    }
    console.log('Done!');
  };
  console.log('Sent POST');

  //Send the proper header information along with the request
  //xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  //
  //xhr.send(params);
  //
}

/*
 * Solve a Sudoku puzzle by sending it to the back-end.
 */
function solve() {
    var json = pu.json_solver();
     doPost(json);
     dict = {"28": ["2", 1, "1"], "41": ["3", 1, "1"], "54": ["7", 1, "1"], "67": ["5", 1, "1"], "80": ["1", 1, "1"], "93": ["9", 1, "1"], "106": ["8", 1, "1"], "119": ["6", 1, "1"], "132": ["4", 1, "1"], "29": ["6", 1, "1"], "42": ["8", 1, "1"], "55": ["2", 1, "1"], "68": ["3", 1, "1"], "81": ["4", 1, "1"], "94": ["5", 1, "1"], "107": ["1", 1, "1"], "120": ["7", 1, "1"], "133": ["9", 1, "1"], "30": ["1", 1, "1"], "43": ["9", 1, "1"], "56": ["3", 1, "1"], "69": ["4", 1, "1"], "82": ["5", 1, "1"], "95": ["2", 1, "1"], "108": ["6", 1, "1"], "121": ["8", 1, "1"], "134": ["7", 1, "1"], "31": ["3", 1, "1"], "44": ["6", 1, "1"], "57": ["1", 1, "1"], "70": ["9", 1, "1"], "83": ["8", 1, "1"], "96": ["7", 1, "1"], "109": ["5", 1, "1"], "122": ["4", 1, "1"], "135": ["2", 1, "1"], "32": ["4", 1, "1"], "45": ["5", 1, "1"], "58": ["6", 1, "1"], "71": ["2", 1, "1"], "84": ["7", 1, "1"], "97": ["1", 1, "1"], "110": ["9", 1, "1"], "123": ["3", 1, "1"], "136": ["8", 1, "1"], "33": ["9", 1, "1"], "46": ["2", 1, "1"], "59": ["5", 1, "1"], "72": ["7", 1, "1"], "85": ["3", 1, "1"], "98": ["8", 1, "1"], "111": ["4", 1, "1"], "124": ["1", 1, "1"], "137": ["6", 1, "1"], "34": ["7", 1, "1"], "47": ["4", 1, "1"], "60": ["8", 1, "1"], "73": ["1", 1, "1"], "86": ["9", 1, "1"], "99": ["6", 1, "1"], "112": ["2", 1, "1"], "125": ["5", 1, "1"], "138": ["3", 1, "1"], "35": ["8", 1, "1"], "48": ["1", 1, "1"], "61": ["4", 1, "1"], "74": ["6", 1, "1"], "87": ["2", 1, "1"], "100": ["3", 1, "1"], "113": ["7", 1, "1"], "126": ["9", 1, "1"], "139": ["5", 1, "1"], "36": ["5", 1, "1"], "49": ["7", 1, "1"], "62": ["9", 1, "1"], "75": ["8", 1, "1"], "88": ["6", 1, "1"], "101": ["4", 1, "1"], "114": ["3", 1, "1"], "127": ["2", 1, "1"], "140": ["1", 1, "1"]}
    console.log(dict);
    //pu.pu_q.number = dict;
    //pu.mode_qa('pu_a'); //include redraw
}


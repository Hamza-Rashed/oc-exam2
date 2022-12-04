let selectedNetworkName = null;

$(document).ready(function () {
  $(".hi").click(function () {
    document.getElementById("Wireless").checked = true;
    let password = document.getElementById("password").value;
  });

  $(".join-network-link").click(function (e) {
    selectedNetworkName = $(e.target).attr("name");
    localStorage.setItem("nameNetwork", selectedNetworkName);
    $("#popup").css("display", "block");
  });

  $("#joinButton").click(function (e) {
    //var joinedNetworkInfo = {
    //    name: selectedNetworkName,
    //    password: $('#password').val()
    //};

    storeItem(selectedNetworkName, $("#password").val());

    $("#password").val("");
    $("#popup").css("display", "none");
  });
});

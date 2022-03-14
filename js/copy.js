function copyText() {
    var cName = document.getElementById("custName").value;
    var cEmail = document.getElementById("custEmail").value;
    var cPhone = document.getElementById("custPhone").value;
    var cProduct = document.getElementById("custProduct").value
   
    var e = document.getElementById("optionPin");
    var resultPin = e.options[e.selectedIndex].text;

    var cIssue = document.getElementById("custIssue").value;
    var cTroubleshooting = document.getElementById("custTroubleshooting").value;

    var cArticles = document.getElementById("articlesUsed").value;

    document.getElementById("temp").value =
        "---Caller's Contact information---" +
        "\n" +
        "Caller's Name: " +
        cName +
        "\n" +
        "Caller's Email: " +
        cEmail +
        "\n" +
        "Caller's call back phone number: " +
        cPhone +
        "\n" +
        "\n" +
        "Product:" +
        "\n" +
        cProduct +
        "\n" +
        "\n" +
        "Primary Pin / Billing Info Verified (Yes/No): " +
        "\n" +
        resultPin +
        "\n" +
        "\n" +
        "Summary of Issue/Request" +
        "\n" +
        cIssue +
        "\n" +
        "\n" +
        "Articles Used:"+
        "\n" +
        cArticles +
        "\n" +
        "\n" +
        "Troubleshooting/Replication Steps:" + 
        "\n" +
        cTroubleshooting +
        "\n" +
        "\n" +
        "----------------------------";

    var copyText = document.getElementById("temp");

    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");

    console.log("Copy button was clicked. All actions worked accordingly!")
    alert("Text copied successfully! Remember to either refresh or reset ;)");

}
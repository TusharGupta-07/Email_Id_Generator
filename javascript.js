$(document).ready(function()
{
    $("#submitBtn").click(function()
    {
        $(".PassGen").hide();

        var getFName = $("#FName").val();
        var getLName = $("#LName").val();
        var getCName = $("#CName").val();
        var getDepartment = $("#department").val();
        
        if(getFName != "" && getLName != "" && getCName != "")
        {
            $("#showInfo").hide();

            var GenEmailId = generateEmailId(getFName,getLName,getCName,getDepartment);
            var noSpacesEmailId = GenEmailId.replace(/ /g,'');

            const length = 12;    
            var GenPassword = generatePassword(length);
            
            //const FinalString = noSpacesEmailId +" "+ GenPassword;
            //$("#showInfo").text(FinalString);

            $("#showInfoName").text("Name : " + getFName + " " + getLName);
            $("#showInfoCompany").text("Company : " + getCName);
            $("#showInfodept").text("Department : " + getDepartment);
            $("#showInfoEmailId").text("Email Id : " + noSpacesEmailId);
            $("#showInfoPassword").text("Password : " + GenPassword);

            $("#gen").show();
            //$("#REmail").show();

        }
        else
        {
            $("#showInfo").html("Fill the required(*) field");
        }

    });


    $("#RPass").click(function()
    {
        $(".PassGen").show();
        $("#submitRePass").show();

        $("#subself").hide();
        $(".EmailGen").hide();
        $("#subselfEmail").hide();

    });

    $("#submitRePass").click(function()
    {
        var userChoice = $("input[type='radio'][name='GeneratePass']:checked").val();

        if(userChoice == "Auto")
        {
            const length = 12;    
            var GenPassword = generatePassword(length);
            $("#showInfoPassword").text("Password : " + GenPassword);
        }
        else 
        {
            $("#submitRePass").hide();
            $("#subself").show();
            $("#submitRePassSelf").click(function(){
                var newpass = $("#PasswordSelf").val();
                if(newpass != "")
                {
                    $("#showInfoPassword").text("Password : " + newpass);
                    
                }
                else
                {
                    $("#showInfoPassword").text("Password : *Enter some value*");

                }

                $("#subself").hide();
                $("#submitRePass").show();
            });
        }

        $(".PassGen").hide();

    });




    $("#REmail").click(function()
    {
        $(".EmailGen").show();
        $("#submitReEmail").show();

        $("#subselfEmail").hide();
        $(".PassGen").hide();
        $("#subself").hide();


    });

    $("#submitReEmail").click(function()
    {
        var userChoice = $("input[type='radio'][name='GenerateEmail']:checked").val();

        if(userChoice == "AutoE")
        {
            var getFName = $("#FName").val();
            var getLName = $("#LName").val();
            var getCName = $("#CName").val();
            var getDepartment = $("#department").val();

            var GenEmailId = ReGenerateEmailId(getFName,getLName,getCName,getDepartment);
            var noSpacesEmailId = GenEmailId.replace(/ /g,'');

            $("#showInfoEmailId").text("Email Id : " + noSpacesEmailId);
        }
        else 
        {
            $("#submitReEmail").hide();
            $("#subselfEmail").show();
            $("#submitReEmailSelf").click(function(){
                var newEmailId = $("#EmailSelf").val();
                if(newEmailId != "")
                {
                    $("#showInfoEmailId").text("Email Id : " + newEmailId);
                    
                }
                else
                {
                    $("#showInfoEmailId").text("Email Id : *Enter some value*");

                }

                $("#subselfEmail").hide();
                $("#submitReEmail").show();
            });
        }

        $(".EmailGen").hide();

    });
});


    



    
function ReGenerateEmailId(FName, LName, CName, dept)
{
    var randomChar = (Math.floor)(Math.random() * 1000);
    if(dept == "none")
    {
        return (FName.toLowerCase() + "." + LName.toLowerCase()+ "." + randomChar + "@" + CName.toLowerCase() + ".com");
    }
    else
    {
        return (FName.toLowerCase() + "." + LName.toLowerCase() + "." + randomChar + "@" + dept + "." + CName.toLowerCase() + ".com");
    }
}


function generateEmailId(FName, LName, CName, dept)
{
    if(dept == "none")
    {
        return (FName.toLowerCase() + "." + LName.toLowerCase() + "@" + CName.toLowerCase() + ".com");
    }
    else
    {
        return (FName.toLowerCase() + "." + LName.toLowerCase() + "@" + dept + "." + CName.toLowerCase() + ".com");
    }

}

function generatePassword(len)
{
    const passwordStr = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM!@#$%^&*()1234567890_+~`.,/:?><";
    var setPassword = [];

    for(var i = 0;i<len;i++)
    {
        var randomChar = (Math.floor)(Math.random() * passwordStr.length);
            setPassword[i] = passwordStr.charAt(randomChar);
    }

    return setPassword.join("");
}

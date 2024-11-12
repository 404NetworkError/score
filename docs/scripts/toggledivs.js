//#region ~~~~~~~~~~~ Data ~~~~~~~~~~~

//#region ~~ Elements ~~

const allGameDivs = document.getElementsByClassName("game");

//#endregion ~~ Elements ~~

//#region ~~ Styles ~~

const styleDefaultDiv = "block";
const styleHide = "none";

//#endregion ~~ Styles ~~

//#endregion ~~~~~~~~~~~ Data ~~~~~~~~~~~

//#region ~~~~~~~~~~~ Functions ~~~~~~~~~~~

function toggleGameDiv(id)
{
    const selectedDiv = document.getElementById(id);

    if (selectedDiv)
    {
        // Toggle the selected div's style
        selectedDiv.style.display = (selectedDiv.style.display === styleHide) ? styleDefaultDiv : styleHide;

        for (let i = 0; i < allGameDivs.length; i++)
        {
            // Hide each div that is not the toggled div
            if (allGameDivs[i] !== selectedDiv)
            {
                allGameDivs[i].style.display = styleHide;
            }
        }
    }
}

//#endregion ~~~~~~~~~~~ Functions ~~~~~~~~~~~

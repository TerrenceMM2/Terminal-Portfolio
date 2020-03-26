$(document).ready(() => {

    var welcome =
        " _____                                   __  __       _           _              \n" +
        "|_   _|__ _ __ _ __ ___ _ __   ___ ___  |  \\/  | __ _| |__  _ __ | | _____ _ __  \n" +
        "  | |/ _ \\ '__| '__/ _ \\ '_ \\ / __/ _ \\ | |\\/| |/ _` | '_ \\| '_ \\| |/ / _ \\ '_ \\ \n" +
        "  | |  __/ |  | | |  __/ | | | (_|  __/ | |  | | (_| | | | | | | |   <  __/ | | |\n" +
        "  |_|\\___|_|  |_|  \\___|_| |_|\\___\\___| |_|  |_|\\__,_|_| |_|_| |_|_|\\_\\___|_| |_|\n" +
        "                                                                                 \n";

    var welcomeSmall = 
        "___                                     \n" +
        " | _ _____ __  _ _  |V| _ |_ __ |  _ __ \n" +
        " |(/_| |(/_| |(_(/_ | |(_|| || ||<(/_| |\n";

    var welcomeLogo = 
    "_____      \n" +
    "  |\\    /|\n" +
    "  | \\  / |\n" +
    "  |  \\/  |\n" +
    "  | _____|\n";

    var term = $("<body>").terminal({
        help: () => {
            term.echo("Current commands:\n\n[[b;#00FF41;#222]photo] - View my bio pic.\n[[b;#00FF41;#222]survey] - Answer a quick question.\n\nWe are building more commands.\n")
        },
        photo: () => {
            term.echo("\n[[@;;;;https://media-exp1.licdn.com/dms/image/C4E03AQG5YnRJyIRMdw/profile-displayphoto-shrink_200_200/0?e=1590624000&v=beta&t=irAVrdI7cNW6I0nwPxnr9SFojqT5qlNgpa9WSE13zc4]]\n");
        },
        survey: () => {
            var history = term.history();
            history.disable();
            term.push((command) => {
                if (command.match(/^(y|yes)$/i)) {
                    term.echo("\nThanks so much! :D\n");
                    term.pop();
                    history.enable();
                } else if (command.match(/^(n|no)$/i)) {
                    term.echo("\nI understand. I'll keep working on it. :)\n");
                    term.pop();
                    history.enable();
                }
            }, {
                prompt: "Do you like the site? (y/n) "
            });
        }
    }, {
        greetings: () => {
            var winWidth = $(window).width();
            if (winWidth < 900 && winWidth > 457) {
                return welcomeSmall;
            } else if (winWidth > 900) {
                return welcome;
            } else {
                return welcomeLogo;
            }
        }
    });

    term.echo("Type [[b;#00FF41;#222]help] for a list of available commands.\n")

    console.log($(window).width())

});
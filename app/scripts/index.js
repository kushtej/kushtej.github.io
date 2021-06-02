var data = {
    heading:{
        headline:"Fresher with Bachelor'sdegree focused on Computer Science.Actively looking for opportunities in the field of SoftwareDevelopment,Researchin Natural Language processing (NLP) and Blockchain.Also have good knowledge in developing webapplications.",
        careerGoal:"To be part of a growth oriented and innovative organization where my capacity to fathom would comprehendand enable business to think beyond the“Norm” resulting inimprovements across the work area.",
    },
    email:"tejasvi.sridhar@gmail.com",
    location:"Mysore, India",
    education: {
        bachelor:{ name : "Maharaja Institue of Technology Thandavapura" , year : "(2016-2020)" },
        preUniversity:{ name : "Vittala PU College" , year : "(2014-2016)" },
    },
    testimonials:{
        testemonial:"Highly skilled in developing language Models for automating language processing tasks. worked on sentiment analysis for regional languages.",
        sourceTitle : "Data Scientist at Rubixe | NLP Research Scholar | Key note Speaker | Corporate Trainer",
        source : "Hemanth Kumar A (Mentor)"
    },
    
    projects: [
        {
            id:"p-01",
            title: "Language Modeling for Kannada Language",
            media: {type:"Img",content:"https://raw.githubusercontent.com/prashanthsp6498/wordmodeling/v0.0.1/preview/project_main.gif"},
            subtitle: "A LSTM (RNN) based Deep learning model trained for kannada language to suggest the next words in a sentence.",
            discription:"A LSTM (RNN) based Deep learning model trained for kannada language to suggest the next words in a sentence for the given text powered by flask framework. The project is built as a platform where a user can signup/login by email verification, create a new file in the editor,save etc.",
            link: "https://github.com/kushtej/kan-language-modeling"
        },
        {
            id:"p-02",
            title: "Inquiry Portal",
            media: {type:"Img",content:"https://picsum.photos/id/3/200/150"},
            subtitle: "A Realtime Inquiry portal to chat with clients/Agents in realtime and ask any inquiry related to anything.",
            discription:"A LSTM (RNN) based Deep learning model trained for kannada language to suggest the next words in a sentence for the given text powered by flask framework. The project is built as a platform where a user can signup/login by email verification, create a new file in the editor,save etc.",
            link: "https://github.com/kushtej/nodejs-inquiry-portal"
        },
        {
            id:"p-03",
            title: "Kannada Word Suggester",
            media: {type:"Img",content:"https://raw.githubusercontent.com/kushtej/kn-word-suggest/master/preview/kannada.gif"},
            discription:"A LSTM (RNN) based Deep learning model trained for kannada language to suggest the next words in a sentence for the given text powered by flask framework. The project is built as a platform where a user can signup/login by email verification, create a new file in the editor,save etc.",
            subtitle: "A word suggester which predicts the complete word of typed incomplete word based on word frequency.",
            link: "https://github.com/kushtej/kn-word-suggest"
        },
        {
            id:"p-04",
            title: "ATM Simulation using VUE.JS",
            media: {type:"Img",content:"https://raw.githubusercontent.com/kushtej/sample-atm-app/master/preview.gif"},
            discription:"A LSTM (RNN) based Deep learning model trained for kannada language to suggest the next words in a sentence for the given text powered by flask framework. The project is built as a platform where a user can signup/login by email verification, create a new file in the editor,save etc.",
            subtitle: "A MVC Design pattern App using Vue.js and PHP to imitate the simulation of an ATM.",
            link: "https://github.com/kushtej/sample-atm-app"
        },
    ],
    gists:[
        {
            id:"g-01",
            title: "Subtitle Synchronizer",
            media: {type:"3",content:"https://raw.githubusercontent.com/prashanthsp6498/wordmodeling/v0.0.1/preview/project_main.gif"},
            discription: "A simple python tool to synchronize subtitles with audio/video in a movie.",
            link: "https://gist.github.com/kushtej/80215d7ddbf656803855a547b06ce2ca"
        },
        {
            id:"g-01",
            title: "Subtitle Synchronizer",
            media: {type:"d",content:"https://raw.githubusercontent.com/prashanthsp6498/wordmodeling/v0.0.1/preview/project_main.gif"},
            discription: "A simple python tool to synchronize subtitles with audio/video in a movie.",
            link: "https://gist.github.com/kushtej/80215d7ddbf656803855a547b06ce2ca"
        },        
        {
            id:"g-01",
            title: "Subtitle Synchronizer",
            media: {type:"a",content:'https://gist.github.com/kushtej/b257196104e395e8d9c4050d1d901c43'},
            discription: "A simple python tool to synchronize subtitles with audio/video in a movie.",
            link: "https://gist.github.com/kushtej/80215d7ddbf656803855a547b06ce2ca"
        },
    ],
}


let loadStaticContent = () => {
    $(".headline").html(data.heading.headline)
    $(".careergoal").html(data.heading.careerGoal)
    $(".location").html(data.location)
    $(".email").html(data.email)
    $(".testemonial").append(data.testimonials.testemonial)
    $(".source").html(data.testimonials.source)
    $(".sourceTitle").html(data.testimonials.sourceTitle)
}


let loadModal = (project) => {
    var mediaTemplate = ``
    if(project.media.type == "Img") {
        console.log(project.media)
        mediaTemplate = 
        `
        <img src="${project.media.content}" class="card-img-top border-bottom" alt="project-image">
        `
    } else if(project.media.type == "iframe") {
        mediaTemplate = 
        `
        <div class="embed-responsive embed-responsive-16by9">
            <iframe class="embed-responsive-item" src="${project.media.content}" allowfullscreen></iframe>
        </div>
        `
    }

    let modalTemplate =
    `
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title font-weight-bold" id="exampleModalLabel">${project.title}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                ${mediaTemplate}
                <h5 class="pt-3 pb-3 font-weight-bold">Discription :</h5>
                ${project.discription}
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <a type="link" href="${project.link}" class="btn btn-primary"><em
                            class="fas fa-external-link-alt mr-2"></em>Visit!</a>
                </div>
            </div>
        </div>
    </div>
    `
    $('#modal').html(modalTemplate)
}



let loadProjects = () => {
    for (const [i,project] of data.projects.entries()) {
        if(project.media.type == "Img") {
            var mediaTemplate = 
            `
            <img src="${project.media.content}" class="card-img-top border-bottom" alt="project-image">
            `
        }
        let card =
        `
        <div class="col mb-4">
            <div class="card">
               ${mediaTemplate}
                <div class="card-body">
                    <h5 class="card-title">${project.title}</h5>
                    <p class="card-text">${project.subtitle}</p>
                    <a href="#" class="btn btn-primary project-no" data-toggle="modal" title="${i}"
                    data-target="#exampleModal"><em class="fas fa-external-link-alt mr-2"></em>Explore</a>
                </div>
            </div>
        </div>
        `
        $('.projects').append(card)
    }
}

let loadGists = () => {

    for (const [i,gists] of data.gists.entries()) {
        let gistsCard = 
        `
        <div class="col-sm-6">
            <div class="card mt-3">
                <div class="card-body">
                    <h5 class="card-title">${gists.title}</h5>
                    <a href="#" class="btn btn-primary gists-no" data-toggle="modal" title="${i}"
                        data-target="#exampleModal">Explore!</a>
                </div>
            </div>
        </div>
        `
        if( (i===0) || (i%2===0) ) {
            console.log(i)
            $(".gists").append('<div class="row gistrow"></div>');
        }
        $(".gistrow:nth-last-child(1)").append(gistsCard);
    }
}


$(document).ready(function () {
    $.confetti.start();
    setTimeout(function(){ $.confetti.stop();}, 3000);
    loadStaticContent()
    loadProjects()
    loadGists()
    $(".project-no").click(function(){
        loadModal(data.projects[parseInt(this.title)])
    });

    $(".gists-no").click(function(){
        loadModal(data.gists[parseInt(this.title)])
    });

});
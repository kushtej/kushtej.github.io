let loadStaticContent = () => {
    $(".headline").html(data.heading.headline)
    $(".careergoal").html(data.heading.careerGoal)
    $(".location").html(data.location)
    $(".email").html(data.email)
    $(".testemonial").append(data.testimonials.testemonial)
    $(".source").html(data.testimonials.source)
    $(".sourceTitle").html(data.testimonials.sourceTitle)
    loadProjects()
    loadGists()
    loadAwards()
    loadITExperiance()
    loadActiveParticipation()
    loadToast(data.toasts.portfolioTemplateInfo);
}


let loadModal = (project) => {
    var mediaTemplate = ``
    var modalDescription = ``
    if(project.media.type == "Img") {
        mediaTemplate = 
        `
        <img src="${project.media.content}" class="card-img-top border-bottom" alt="project-image">
        `
    } else if(project.media.type == "iframe") {
        mediaTemplate = `<div class="modal-iframe-container">${project.media.content}</div>`
    } else if(project.media.type == "progress-bar") {
        mediaTemplate = 
        `
        <div class="progress">
            <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        `
    }

    if(typeof(project.discription) === "string") {
        modalDescription = `<h5 class="pt-3 pb-3 font-weight-bold">Discription :</h5>`
        modalDescription += project.discription
    } 
    else if(project.discription[0].won === undefined ) {
        modalDescription +=  `<ol>`
        for(let i of project.discription) {
            modalDescription += `<li class="p-1">${i}</li>`
        }
        modalDescription +=  `</ol>` 
    }
    else if(typeof(project.discription) === "object") {
        for (let [index,awardMode] of project.discription.entries()) {
            modalDescription += `<h6 class="modal-title font-weight-bold">${project.discription[index].mode}</h6>`
            modalDescription +=  `<ol>`
            for(let i of project.discription[index].won) {
                modalDescription += `<li class="p-1">${i}</li>`
            }
            modalDescription +=  `</ol>`
        }
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
                ${modalDescription}
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <a type="link" href="${project.link}" class="btn btn-primary project-link"><em
                            class="fas fa-external-link-alt mr-2"></em>Visit!</a>
                </div>
            </div>
        </div>
    </div>
    `
    $('#modal').html(modalTemplate)
    if(project.link === undefined) {
        $(".project-link").hide()
    } 
}



let loadProjects = () => {
    for (const [i,project] of data.projects.entries()) {
        if(project.media.type == "Img") {
            var mediaTemplate = 
            `
            <img src="${project.media.content}" class="card-img-top border-bottom" alt="project-image">
            `
        } else if(project.media.type == "iframe") {
            mediaTemplate = project.media.content
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
        if(i>2){
            $('.projects').append(card)
        } else {
            $('.recent-projects').append(card)
        }
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
            $(".gists").append('<div class="row gistrow"></div>');
        }
        $(".gistrow:nth-last-child(1)").append(gistsCard);
    }
}

let loadAwards = () => {
    let template = 
    `
    <div class="card mt-3">
        <div class="card-body">
            <h5 class="card-title"><em class="fas fa-award mr-2"></em>Awards</h5>
            <p class="card-text">All my Technical and Non-Technical Awards</p>
            <a href="#" class="btn btn-primary awards-button" data-toggle="modal" data-target="#exampleModal" >Checkout!</a>
        </div>
    </div>
    `
    $('.awards').append(template)
}

let loadActiveParticipation = () => {
    let template = 
    `
    <div class="card mt-3">
        <div class="card-body">
            <h5 class="card-title"><em class="fas fa-running mr-2"></em>Active Participation</h5>
            <p class="card-text">All important responsibilies and active participation in various activies as a group or individually! </p>
            <a href="#" class="btn btn-primary activeParticipation-button" data-toggle="modal" data-target="#exampleModal" >Checkout!</a>
        </div>
    </div>
    `
    $('.activeParticipation').append(template)

}

let loadITExperiance  = () => {
    for (const [i,IT] of data.IT.entries()) {
        let template = 
        `
        <div class="item">
            <h5 class="title"> ${IT.designation} - <span class="place"><a href="${IT.companyLink}">${IT.company}</a></span> <span class="year">(${IT.year})</span></h5>
            <p class="title"><a href="${IT.companyLink}" target="_blank">${IT.companyLink}</a></p>
            <p>${IT.discription}</p>
        </div>
        <hr/>
        ` 
        $('.it-experience').append(template)    
    }

}

let loadConfetti = () => {

    setTimeout(function(){
        $.confetti.start();
        $(document).ready(function () {
            loadModal(data.thankYou);
            $("#exampleModal").modal('show');
        });
        setTimeout(function(){
            $.confetti.stop();
        }, 6000);
    }, 30000);
}


let loadToast  = (toastValues) => {
    let template = 
    `
    <div aria-live="polite" aria-atomic="true">
        <div class="toast" style="position: absolute; top: 2%; right: 2%;" data-delay="${toastValues.stayTime.toString()}" >
            <div class="toast-header">
                <strong class="mr-auto">${toastValues.heading}</strong>
                <small>Now</small>
                <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="toast-body">${toastValues.bodyContent}</div>
        </div>
    </div>
    `
    setTimeout(function(){
        $('.showToast').html(template)
        $('.toast').toast("show")
    }, toastValues.delay);
}


$(document).ready(function () {
    loadStaticContent()
    loadConfetti()

    $(".project-no").click(function(){
        loadModal(data.projects[parseInt(this.title)])
    });

    $(".gists-no").click(function(){
        loadModal(data.gists[parseInt(this.title)])
    });

    $(".awards-button").click(function(){
        loadModal(data.awards)
    });

    $(".activeParticipation-button").click(function(){
        loadModal(data.activeParticipation)
    });
});

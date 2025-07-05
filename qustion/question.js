//  Quiz questions
const quizQuestions = [
    {
        que: 'Which position is specifically used for repositioning a breech fetus?',
        opt: ['Sim’s Position', 'Trendelenburg Position', 'Knee-Chest Position', 'Lithotomy Position'],
        ans: 2
    },
    {
        que: 'What are two primary uses of the Trendelenburg Position?',
        opt: ['Dental procedures and sleep apnea management', 'Pelvic surgeries and shock management', 'Back examinations and massage therapy', 'Routine physicals and vision tests'],
        ans: 1
    },
    {
        que: 'What is the difference between a Vaginal Exam and a Pelvic Exam according to the summary?',
        opt: ['Vaginal exam is broader, pelvic exam is narrower.', 'Vaginal exam uses fingers/speculum to check cervix/vaginal wall; Pelvic exam is broader, checking internal/external genitalia and reproductive organs.', 'Vaginal exam is for infections, pelvic exam is for pain.', 'Vaginal exam is for external organs only, pelvic exam is for internal.'],
        ans: 1
    },
    {
        que: 'Which of these is NOT a type of ultrasonography listed?',
        opt: ['Transvaginal', 'Transabdominal', 'Sonohysterography', 'Radiography'],
        ans: 3
    },
    {
        que: 'Which of the following are considered advanced tools in ultrasonography?',
        opt: ['Magnifying glass and flashlight', '2D, 3D, Color Doppler, AI imaging', 'Ruler and protractor', 'Thermometer and stethoscope'],
        ans: 1
    },
    {
        que: 'What is the specific purpose of Hysterosalpingography (HSG)?',
        opt: ['To check for brain tumors', 'To check for tubal blockage', 'To assess lung function', 'To measure bone density'],
        ans: 1
    },
    {
        que: 'What can ultrasound results detect regarding ovarian health?',
        opt: ['Only ovarian cysts', 'Fibroids, cysts, ectopic pregnancies, PCOS', 'Only Polycystic Ovary Syndrome (PCOS)', 'Only ectopic pregnancies'],
        ans: 1
    },
    {
        que: 'What does HSG specifically show regarding fallopian tubes?',
        opt: ['Their exact size', 'Tubal patency or blockage', 'The presence of infections', 'The rate of egg transport'],
        ans: 1
    },
    {
        que: 'What do Hormonal Assays diagnose by measuring FSH, LH, and Estradiol?',
        opt: ['Thyroid issues', 'Ovarian issues', 'Adrenal gland problems', 'Pancreatic disorders'],
        ans: 1
    },
    {
        que: 'What is the purpose of an Endometrial Biopsy?',
        opt: ['To screen for breast cancer', 'To investigate bleeding issues', 'To check for bone density', 'To assess lung capacity'],
        ans: 1
    },
    {
        que: 'A patient recovering from a vaginal procedure might be placed in which position for comfort?',
        opt: ['Trendelenburg Position', 'Knee-Chest Position', 'Lateral Position', 'Lithotomy Position'],
        ans: 2
    },
    {
        que: 'What does the abdominal exam assess regarding the uterus?',
        opt: ['Uterine contractions per minute', 'Uterine size and tenderness', 'Uterine blood flow', 'Uterine lining thickness'],
        ans: 1
    },
    {
        que: 'Which type of ultrasound uses a probe inserted into the vagina?',
        opt: ['Transabdominal', 'Sonohysterography', 'Transvaginal', '3D ultrasound'],
        ans: 2
    },
    {
        que: 'What information does Color Doppler provide in ultrasonography?',
        opt: ['Tissue density', 'Blood flow', 'Bone structure', 'Nerve activity'],
        ans: 1
    },
    {
        que: 'In radiology, ensuring patient safety involves protection from what?',
        opt: ['Loud noises', 'Radiation exposure', 'Cold temperatures', 'Bright lights'],
        ans: 1
    },
    {
        que: 'What does PCOS stand for, and what diagnostic tool can help detect it?',
        opt: ['Prostate Cancer Osteoporosis Syndrome; MRI', 'Polycystic Ovary Syndrome; Ultrasound', 'Pelvic Connective Tissue Syndrome; CT scan', 'Painful Ovarian Cyst Syndrome; X-ray'],
        ans: 1
    },
    {
        que: 'Why would a patient with abnormal bleeding be indicated for a pelvic exam?',
        opt: ['To assess blood volume', 'To identify the cause of the bleeding, such as infections or structural issues', 'To prescribe painkillers', 'To monitor heart rate'],
        ans: 1
    },
    {
        que: 'Which examination assesses internal and external genitalia and reproductive organs broadly?',
        opt: ['Vaginal Exam', 'Pelvic Exam', 'Abdominal Exam', 'Rectal Exam'],
        ans: 1
    },
    {
        que: 'An ectopic pregnancy would typically be detected by which diagnostic tool?',
        opt: ['Pap Smear', 'Hormonal Assays', 'Ultrasound', 'HSG'],
        ans: 2
    },
    {
        que: 'If tubal patency is being assessed, which radiology modality would be used?',
        opt: ['X-ray', 'MRI', 'Hysterosalpingography (HSG)', 'CT scan'],
        ans: 2
    },
    {
        que: 'What are FSH and LH examples of?',
        opt: ['Tumor markers', 'Hormonal assays', 'Diagnostic imaging techniques', 'Types of biopsies'],
        ans: 1
    },
    {
        que: 'What condition might an endometrial biopsy help investigate?',
        opt: ['Normal menstrual cycles', 'Abnormal bleeding issues', 'Ovulation', 'Pregnancy confirmation'],
        ans: 1
    },
    {
        que: 'What does "patency" refer to in the context of HSG results?',
        opt: ['The length of the fallopian tubes', 'The openness or blockage of the fallopian tubes', 'The thickness of the fallopian tube walls', 'The position of the fallopian tubes'],
        ans: 1
    },
    {
        que: 'Which hormone is typically elevated in cases of ovarian issues?',
        opt: ['Insulin', 'Estradiol (can be low or high depending on specific issue), FSH, LH', 'Testosterone', 'Thyroxine'],
        ans: 1
    },
    {
        que: 'What is a primary nursing role before a radiology procedure?',
        opt: ['Performing the scan', 'Patient education', 'Interpreting the results', 'Making a medical diagnosis'],
        ans: 1
    },
    {
        que: 'What is the primary purpose of a Dilation and Curettage (D&C) procedure?',
        opt: ['To remove ovarian cysts.', 'To remove tissue from the inside lining of the uterus (endometrium).', 'To repair a prolapsed uterus.', 'To check fallopian tube patency.'],
        ans: 1
    },
    {
        que: 'A diagnostic use of D&C is to:',
        opt: ['Treat heavy menstrual bleeding.', 'Obtain tissue samples for microscopic examination to diagnose causes of abnormal uterine bleeding, infections, or uterine cancer.', 'Remove retained placenta after childbirth.', 'Reposition a breech fetus.'],
        ans: 1
    },
    {
        que: 'Which of the following is a therapeutic use of D&C?',
        opt: ['Screening for cervical cancer.', 'Diagnosing ovarian cysts.', 'To treat conditions such as incomplete miscarriage or remove uterine polyps.', 'Checking for tubal blockage.'],
        ans: 2
    },
    {
        que: 'A serious risk associated with D&C is:',
        opt: ['Kidney failure.', 'Uterine perforation.', 'Blindness.', 'Hearing loss.'],
        ans: 1
    },
    {
        que: 'A key benefit of myomectomy compared to hysterectomy is that it:',
        opt: ['Is always a quicker procedure.', 'Preserves the uterus, allowing women to maintain fertility.', 'Has no associated risks.', 'Is only performed on post-menopausal women.'],
        ans: 1
    },
    {
        que: 'What type of incision is often associated with Abdominal (Open) Myomectomy?',
        opt: ['Several small incisions.', 'A larger horizontal "bikini line" incision.', 'No incision.', 'An incision through the vagina.'],
        ans: 1
    },
    {
        que: 'What is a key advantage of Laparoscopic Myomectomy over open surgery?',
        opt: ['Longer hospital stay.', 'More blood loss.', 'Shorter hospital stay and quicker recovery.', 'Higher risk of complications.'],
        ans: 2
    },
    {
        que: 'Hysteroscopic Myomectomy is best for fibroids located:',
        opt: ['On the outside of the uterus.', 'Inside the uterine cavity.', 'In the fallopian tubes.', 'In the ovaries.'],
        ans: 1
    },
    {
        que: 'Removal of the uterus and cervix is known as a:',
        opt: ['Subtotal Hysterectomy.', 'Radical Hysterectomy.', 'Total Hysterectomy.', 'Hysterectomy with Bilateral Salpingo-Oophorectomy.'],
        ans: 2
    },
    {
        que: 'Which of the following is an indication for hysterectomy?',
        opt: ['Healthy pregnancy.', 'Uterine fibroids.', 'Common cold.', 'Minor headaches.'],
        ans: 1
    },
    {
        que: 'A significant risk of bilateral oophorectomy is:',
        opt: ['No impact on bone health.', 'Immediate menopause causing symptoms like hot flashes and increased risk of osteoporosis.', 'Improved fertility.', 'Reduced cardiovascular disease risk.'],
        ans: 1
    },
    {
        que: 'Robotic-Assisted Hysterectomy uses robotic technology for:',
        opt: ['Faster recovery only.', 'Enhanced precision.', 'Less pain only.', 'Avoiding anesthesia.'],
        ans: 1
    },
    {
        que: 'What type of salpingectomy involves removing only the diseased or affected segment of the fallopian tube?',
        opt: ['Complete Salpingectomy.', 'Bilateral Salpingectomy.', 'Partial (Segmental) Salpingectomy.', 'Salpingo-oophorectomy.'],
        ans: 2
    },
    {
        que: 'A benefit of salpingectomy is that it:',
        opt: ['Always guarantees pregnancy.', 'Reduces risk of ovarian and fallopian tube cancers.', 'Causes immediate menopause.', 'Has no surgical risks.'],
        ans: 1
    },
    {
        que: 'If both fallopian tubes are removed during salpingectomy, it results in:',
        opt: ['Natural conception only.', 'Infertility by natural conception.', 'Reduced risk of heart disease.', 'Increased bone density.'],
        ans: 1
    },
    {
        que: 'What does a hysterosalpingogram (HSG) primarily evaluate?',
        opt: ['The condition of the ovaries.', 'The shape of the uterine cavity and whether the fallopian tubes are open.', 'The presence of cervical cancer.', 'The thickness of the uterine wall.'],
        ans: 1
    },
    {
        que: 'HSG is primarily used in the assessment of:',
        opt: ['Male infertility.', 'Female infertility or recurrent miscarriage.', 'Kidney disease.', 'Liver dysfunction.'],
        ans: 1
    },
    {
        que: 'A potential benefit of HSG, besides diagnosis, is:',
        opt: ['It induces menopause.', 'It may have a therapeutic effect by flushing debris from the tubes, potentially improving fertility.', 'It treats uterine fibroids.', 'It prevents ovarian cysts.'],
        ans: 1
    },
    {
        que: 'Salpingolysis is a surgical procedure aimed at:',
        opt: ['Removing the entire fallopian tube.', 'Restoring the patency of blocked fallopian tubes by dividing and removing adhesions.', 'Creating a new fallopian tube.', 'Treating ectopic pregnancy by removing the tube itself.'],
        ans: 1
    },
    {
        que: 'What is a common cause of adhesions leading to tubal infertility, an indication for salpingolysis?',
        opt: ['Genetic mutations.', 'Infections (e.g., pelvic inflammatory disease) or endometriosis.', 'Normal aging.', 'Healthy diet.'],
        ans: 1
    },
    {
        que: 'If a premenopausal woman undergoes bilateral oophorectomy, it results in:',
        opt: ['Delayed menopause.', 'Immediate menopause.', 'No hormonal changes.', 'Increased estrogen production.'],
        ans: 1
    },
    {
        que: 'For women with high genetic risk (e.g., BRCA1 or BRCA2 mutations), what type of mastectomy might be performed?',
        opt: ['Simple (Total) Mastectomy.', 'Modified Radical Mastectomy.', 'Radical Mastectomy.', 'Prophylactic (preventive) mastectomy.'],
        ans: 3
    },
    {
        que: 'A common complication after mastectomy, especially if lymph nodes are removed, is:',
        opt: ['Appendicitis.', 'Lymphedema.', 'Kidney stones.', 'Gallstones.'],
        ans: 1
    },
    {
        que: 'Which nursing diagnosis is common for post-mastectomy patients related to appearance?',
        opt: ['Acute Pain.', 'Risk for Infection.', 'Disturbed Body Image.', 'Impaired Gas Exchange.'],
        ans: 2
    },
    {
        que: 'What is a critical aspect of patient monitoring during the intraoperative phase?',
        opt: ['Discussing future discharge plans.', 'Continuously monitoring vital signs, oxygenation, and patient positioning.', 'Documenting only the surgeon\'s actions.', 'Preparing the post-operative meal.'],
        ans: 1
    }
];

//add questions to local storage 
if(!localStorage.getItem(quizQuestions)){
    localStorage.setItem('quizQuestions', JSON.stringify(quizQuestions));
}
//Accessing questions
const storedQuestions = JSON.parse(localStorage.getItem("quizQuestions"));
//Accesing elements
const question = document.querySelector('.quest');
const options = document.querySelector('.options');
const index = document.querySelector('.ques-left');
const seconds = document.querySelector('.seconds');



// display currunt index question
const displayQuestion = () =>{
    let sec = 15;

    const countDown = ()=>{
        if(sec >= 0){
            seconds.innerHTML = `${sec}s`;
            sec--;
        }else{
            currentQuestionIndex++;
            displayQuestion()
            clearInterval(beginCount);
        }
    }
    //Begin Count down
    const beginCount = setInterval(countDown, 1000);

    if(currentQuestionIndex >= storedQuestions.length){
        clearInterval(beginCount);
        window.location.href = "../result/result.html";
    }


    //Display questions 
    const currentQuestion = storedQuestions[currentQuestionIndex];
    question.textContent = currentQuestion.que;
    index.textContent = `${currentQuestionIndex + 1} / ${storedQuestions.length}`;

    //Loop over options and create option
    let displayOption = currentQuestion.opt.map((option, index)=>{
        // index = 0;
        return `<p class="opt" data-index="${index}">${option}</p>`
    });
    displayOption = displayOption.join('');
    options.innerHTML = displayOption;

    //when an option is clicked
    const paragraphs = document.querySelectorAll('.opt');
    paragraphs.forEach((paragraph, index)=>{
    paragraph.addEventListener('click', ()=>{
        const selectedOptionIndex = parseInt(paragraph.dataset.index);
        // const currentQuestion = storedQuestions[currentQuestionIndex];

        if(selectedOptionIndex === currentQuestion.ans){
            console.log('correct');
            score++;
            //storing the score
            localStorage.setItem('score', JSON.stringify(score));
            console.log(score);
            
        }else{
            console.log(`wrong`);
        }
        currentQuestionIndex++;
        clearInterval(beginCount);

        //if there are more question
        if(currentQuestionIndex < storedQuestions.length){
            displayQuestion();
        }else{
            console.log(`your score is ${score}`);
            clearInterval(beginCount);
            window.location.href = "../result/result.html";
        }
    });

    });
    
    
    


};

// Question index
let currentQuestionIndex = 0;


// Call the displayQuestion function to show the first question
displayQuestion();

// initial score
let score = 0;





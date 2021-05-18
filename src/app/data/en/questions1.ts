import { QuestionSet } from '../../interfaces/question-set';

export const enQuiz1: QuestionSet[] = [
  {
    context: 'I have just received an email and I do not know who it is from. It is asking me to click on a link to change my password to connect to the NGO’s services.',
    question: 'Should I click on the link and change my password?',
    responses: {
      1: 'Yes, of course I should because it concerns the organization’s services.',
      2: 'Not sure, but I could just click on the link to see where it takes me.',
      3: 'No, I should neither click on the link nor change my password before being sure of who the sender is.',
    },
    correct: 3,
    reason: 'The link could lead to a website controlled by cybercriminals, who could then use your password that you have just provided them to compromise your data, your computer, your organization, or to steal important information. This is known as a phishing attack. That could also lead to a ransomware attack where your documents get locked up because malicious software has infected your computer and you are asked to pay to unlock them.',
    image: 'fish'
  },
  {
    context: 'I have just received an email from someone in my organization. It looks legitimate because the name, icon and email address match what I am used to seeing from them.',
    question: 'How can I be sure that the sender of the e-mail is who they claim to be?',
    responses: {
      1: 'Follow your instincts.',
      2: 'I should ask myself if I was expecting this email or check with the sender by contacting them on another device, for example.',
    },
    correct: 2,
    reason: 'Always check with the sender - especially if the email is asking you for sensitive information - whether they actually sent the email or if their account have been compromised. If you do not personally know this person, you need to double-check with other colleagues and/or managers.',
    image: 'puzzled-dude'
  },
  {
    context: 'I have created a new email account and have to set a new password to access its inbox.',
    question: 'Which password should I use?',
    responses: {
      1: '188Hello',
      2: 'The same password I use on my other email accounts.',
      3: '7z23Nk&ui',
      4: 'Spring2021'
    },
    correct: 3,
    reason: 'By using a password that is too short or too simple, you expose yourself to having the password be cracked or enumerated. By making the password more complex and longer, you reduce the likelihood of that happening. By not reusing your passwords, you reduce how many services can be compromised by knowing one password. If you write your passwords down, make sure only you can retrieve them and that they are stored in a safe place.',
    image: 'lock'
  },
  {
    context: 'I changed my email account password 5 months ago and my account has not been compromised.',
    question: 'Should I change my account password?',
    responses: {
      1: 'Yes, I should change it regularly',
      2: 'Yes, if I wish to.',
      3: 'No, I changed it a few months ago already and it is still secure, so there is no need.',
    },
    correct: 2,
    reason: 'It can be good to change your password after a couple of months but remember to always create a difficult password. A safe password should contain 12 characters - with at least one capital letter, a number and a symbol. It could be a good idea to use password managers that can help you create and remember complicated passwords. Additionally, you can set up haveibeenpwned.com to check if and when your email address appears in a data breach.',
    image: 'lock'
  },
  {
    context: 'A colleague or acquaintance says they need information that is on one of my accounts urgently, and I cannot access it currently because I am not at my computer. They ask me for the password so that they can retrieve it without bothering me.',
    question: 'Should I give this person my password?',
    responses: {
      1: 'Yes, I can because it is an emergency!',
      2: 'I try to avoid doing this, but it is an emergency, so yes.',
      3: 'No, absolutely not.',
    },
    correct: 3,
    reason: 'It is important never to share your passwords with other people, because you cannot be certain it is really them. Cybercriminals regularly instill a sense of urgency to get you to share information. If it was really them, there is the possibility that the message containing the password is intercepted by a cybercriminal.',
    image: 'puzzled-dude'
  },
  {
    context: 'I am leaving my workstation at the office to go grab a coffee with some colleagues.',
    question: 'Should I log out of my mailbox?',
    responses: {
      1: 'Yes, it is very important.',
      2: 'No, the only people that can access this computer are my colleagues.',
      3: 'No, there is no need as the computer will go to sleep after a short while anyways.',
    },
    correct: 1,
    reason: 'It is important to log out of your services and from your computer because someone -- including your colleagues -- could possibly access it for some nefarious purposes, such as retrieving confidential data and information. For your phone, always lock it when you are not using it, so that it is more difficult for somebody to get into it and access your emails, for example.',
    image: 'lock'
  },
];

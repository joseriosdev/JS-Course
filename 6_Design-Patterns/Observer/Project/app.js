/*
Create a chat room using the Observer pattern
*/

class Chatroom {
    constructor() {
        this.chatParticipants = [];
    }

    subscribe(...participants) {
        participants.forEach( participant => this.chatParticipants.push(participant) );
    }

    unsubscribe(participant) {
        this.chatParticipants = this.chatParticipants.filter( item => item !== participant );
    }

    fire(thisObj) {
        for (let participant of this.chatParticipants) {
            if (thisObj === participant)
                continue;
            participant.notified();
        }
    }
}

class Participant {
    constructor(username) {
        this.username = username;
    }

    chat(txt, chatroom) {
        console.log(this.username+ ' wrote:');
        console.log(txt);
        chatroom.fire(this);
    }

    notified() {
        console.log(this.username+ ' received a notification')
    }
}

const roger = new Participant('Roger');
const wanda = new Participant('Wanda');
const luna = new Participant('Luna');
const chatroom = new Chatroom();

chatroom.subscribe(roger, wanda, luna);
roger.chat('Hi y\'all!', chatroom);
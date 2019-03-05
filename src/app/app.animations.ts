import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

export const slideAnimation=trigger('slideInAnimation',[
    state("open",style({
    opacity:0,transform:"translateX(20%)"})),
    state("close",style({})),
    transition("open=>close",[
    style({
    opacity:.5,transform:"translateX(20%)"}),animate(1000)]),

    transition("void=>*",[
       animate(2000, keyframes([
        style({backgroundColor:"yellow",offset:.1})
        ,style({ backgroundColor:"red", opacity:0,offset:1})]))]),
        
        transition(":leave",[
           animate(2000,style({opacity:0}))]),
           transition("*=>void",[
            style({
            opacity:0}),animate(1000)])

]);

export const slideOutAnimation=trigger('slideOutAnimation',[
    state("open",style({
    opacity:0,transform:"translateX(-20%)"})),
    state("close",style({})),
    transition("open=>close",[
    style({
    opacity:.5,transform:"translateX(20%)"}),animate(1000)]),

    transition("void<=>*",[
        style({
        opacity:0,transform:"translateX(-20%)"}),animate("2s ease-in")]),
        transition(":leave",[
           animate(2000,style({opacity:0}))])

])
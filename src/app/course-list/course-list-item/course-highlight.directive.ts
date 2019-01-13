import { Directive, Input, HostListener, ElementRef, HostBinding, OnInit } from "@angular/core";

@Directive({
    selector: '[appCourseHighlight]'
})

export class CourseHighlightDirective implements OnInit {
    @Input() set appCourseHighlight(date: Date) {
        this.defineCourseBorderStyle(date);
    }
    @HostBinding('style.border') border: string;
    
    private fourteenDays: number = 1000 * 60 * 60 * 24 * 14;
    private borderStyle: string = "none";
    
    constructor(private elRef: ElementRef) { }

    ngOnInit() {
        this.border = this.borderStyle;
    }

    defineCourseBorderStyle(date: Date) {
        if(
            +date <= +new Date()
            && +new Date() - (+date) < this.fourteenDays 
        ) {
            this.borderStyle = '2px solid lime';
        } else if(
            +date > +new Date()
        ) {
            this.borderStyle = '2px solid aqua';
        } else {
            this.borderStyle = 'none';
        }
    }
}
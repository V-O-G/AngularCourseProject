import { 
    Directive, 
    Input, 
    ElementRef, 
    HostBinding, 
    OnInit, 
    Renderer2 
} from "@angular/core";

@Directive({
    selector: '[appCourseHighlight]'
})

export class CourseHighlightDirective implements OnInit {
    @Input() set appCourseHighlight(date: string) {
        this.defineCourseBorderStyle(date);
    }
    @HostBinding('style.borderColor') borderColor: string;
    
    private fourteenDays: number = 1000 * 60 * 60 * 24 * 14;
    private borderColorStyle: string = "none";
    
    constructor(
        private elRef: ElementRef,
        private renderer: Renderer2,
        ) { }

    ngOnInit() {
        this.borderColor = this.borderColorStyle;
    }

    defineCourseBorderStyle(date: string) {
        if(!date) {
            return;
        } else if(
            Date.parse(date) <= Date.now()
            && Date.now() - Date.parse(date) < this.fourteenDays 
        ) {
            this.borderColorStyle = 'palegreen';
            this.renderer.setStyle(this.elRef.nativeElement, 'border','2px solid');
        } else if(
            Date.parse(date) > Date.now()
        ) {
            this.borderColorStyle = 'powderblue';
            this.renderer.setStyle(this.elRef.nativeElement, 'border', '2px solid');
        }
    }
}
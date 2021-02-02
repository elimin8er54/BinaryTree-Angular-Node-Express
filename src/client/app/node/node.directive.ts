import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[nodeHost]'
})

export class NodeDirective {
    constructor(public viewContainerRef: ViewContainerRef) { }
}
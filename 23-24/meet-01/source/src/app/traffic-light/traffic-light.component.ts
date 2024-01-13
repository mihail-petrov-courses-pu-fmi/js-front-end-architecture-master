import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
    selector    : 'traffic-light',
    templateUrl : './traffic-light.component.html',
    styleUrl    : './traffic-light.component.scss',
    standalone  : true
})
export class TrafficLightComponent implements OnInit {

    @Output()
    public onTrafficLightChange = new EventEmitter();

    private trafficLight: any = 'red';
    
    public ngOnInit(): void {
        
        setInterval(() => {
            this.onTrafficLightChange.emit({
                trafficSignal: this.trafficLight 
            });

            this.trafficLight = this.getNextLight();

        }, 1000);
    }

    private getNextLight() {

        if(this.trafficLight == 'red'   ) return 'yellow';
        if(this.trafficLight == 'yellow') return 'green';       
        if(this.trafficLight == 'green' ) return 'red';
        return null;
    }

}
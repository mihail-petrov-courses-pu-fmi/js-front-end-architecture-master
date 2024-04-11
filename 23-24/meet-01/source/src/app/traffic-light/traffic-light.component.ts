import { CommonModule } from "@angular/common";
import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
    selector    : 'traffic-light',
    templateUrl : './traffic-light.component.html',
    styleUrl    : './traffic-light.component.scss',
    standalone  : true,
    imports     : [
        CommonModule
    ]
})
export class TrafficLightComponent implements OnInit {

    @Output()
    public onTrafficLightChange = new EventEmitter();

    public trafficLight: any = 'red';
    
    public ngOnInit(): void {
        
        this.onTrafficLightChange.emit({
            trafficSignal: this.trafficLight 
        });

        setInterval(() => {

            this.trafficLight = this.getNextLight();
            
            this.onTrafficLightChange.emit({
                trafficSignal: this.trafficLight 
            });

        }, 1000);
    }

    private getNextLight() {

        if(this.trafficLight == 'red'   ) return 'yellow';
        if(this.trafficLight == 'yellow') return 'green';       
        if(this.trafficLight == 'green' ) return 'red';
        return null;
    }

}
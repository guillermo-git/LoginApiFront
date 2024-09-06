import { FormGroup } from "@angular/forms";


export class AppBaseComponet{


    public isTouchedField = (form: FormGroup, field: string): boolean => {  
            return form.get(field)?.touched ?? false;  
        }  
}
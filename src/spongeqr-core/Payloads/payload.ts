import { dataType } from '../DataTypes/DataTypes';

interface payload
{
    type: string;
    data: dataType;

    formatData(): string;

    generateQR(canvas: HTMLCanvasElement): void; 
}

export default payload;
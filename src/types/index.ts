// exporting input props

export interface TextInputProps {
    onTextChange: (text: string) => void;
    placeholder?: string;
    initialValue?: string;
}

// exporting statsdisplay props

export interface TextStats {
    characterCount: number;
    wordCount: number;
    readingTime: number; // in minutes
}

export interface StatsDisplayProps {
    stats: TextStats;
    showReadingTime?: boolean;
}


// exporting  character props

export interface CharacterCounterProps {
    minWords?: number;
    maxWords?: number;
    targetReadingTime?: number; // in minutes
}
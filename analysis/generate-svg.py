import pandas as pd
import numpy as np
from altair import Chart, X, Y, SortField, Detail, Axis

csv_path = "../data/dropped-frames.csv"
df = pd.read_csv(csv_path, parse_dates=["Dropped Frame Start", "Dropped Frame End"], low_memory=False)
data = df[['Officer ID', 'Dropped Frame Start', 'Duration', 'FPS', 'Dropped Frames', 'Resolution', 'File Size', 'File Name', 'Frame Range', 'Player Time Range']]
data = data.rename(columns={'Dropped Frame Start': 'Timestamp'})

## Overview
Chart(data.sample(100)).configure_axis(gridColor='#ccc').mark_line(interpolate='linear').encode(
    X(field='Timestamp', type='temporal', timeUnit='yearmonth', axis=Axis(title=' ', ticks=6, labelAngle=0, tickSizeEnd=0, tickSize=0, tickPadding=10)),
    Y('sum(Duration)', axis=Axis(title='Seconds lost'))
).savechart('test.svg')

$ErrorActionPreference = "Stop"

$workspace = "C:\Users\locha\.gemini\antigravity\scratch\saitech-engineering"
$sourceHero = "C:\Users\locha\.gemini\antigravity\brain\6cdcf13a-a808-4ea3-a301-512b3466885a\Hero images"
$sourceWork = "C:\Users\locha\.gemini\antigravity\brain\6cdcf13a-a808-4ea3-a301-512b3466885a\Work Show"

$destHero = "$workspace\public\images\hero"
$destWork = "$workspace\public\images\work_show"

New-Item -ItemType Directory -Force -Path $destHero | Out-Null
New-Item -ItemType Directory -Force -Path $destWork | Out-Null

# Copy Hero Images sequentially as 1.jpg, 2.jpg...
$heroFiles = Get-ChildItem -Path $sourceHero -File | Sort-Object Name
$i = 1
foreach ($file in $heroFiles) {
    Copy-Item -Path $file.FullName -Destination "$destHero\$i.jpg" -Force
    $i++
}

# Copy Work Show Images sequentially as 1.jpg, 2.jpg...
$workFiles = Get-ChildItem -Path $sourceWork -File | Sort-Object Name
$j = 1
foreach ($file in $workFiles) {
    Copy-Item -Path $file.FullName -Destination "$destWork\$j.jpg" -Force
    $j++
}

Write-Output "Done copying $i hero images and $j work show images."

import { DetalheProjeto } from '@/entities/detalhe-projeto/ui';
import { SidebarOuterTrigger } from '@/entities/side-bar/ui';
import { IonIcon } from '@/shared/ui/ion-icon';
import { Skeleton } from '@/shared/ui/skeleton';
import { Suspense } from 'react';

export default function ProjetoDetalhe({
    params,
}: {
    params: {
        id: string;
    };
}) {
    return (
        <main className="flex w-full flex-col overflow-y-scroll bg-background p-3 pb-5 text-foreground md:px-10">
            <div className="flex items-center">
                <SidebarOuterTrigger className="pl-0 md:hidden">
                    <IonIcon name="menu-outline" size="large" />
                </SidebarOuterTrigger>
            </div>
            <Suspense fallback={<Skeleton className="mb-2 h-4 w-56" />}>
                <DetalheProjeto projetoId={params.id} />
            </Suspense>
        </main>
    );
}

export const fetchCache = 'force-no-store';

<?php declare(strict_types=1);

namespace SwagHelloCody\Controller;


use Shopware\Core\Framework\Routing\Annotation\RouteScope;
use SwagHelloCody\Content\RandomPhraseGenerator;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @RouteScope(scopes={"sales-channel-api"})
 */
class RandomPhraseController extends AbstractController
{
    /**
     * @var RandomPhraseGenerator
     */
    private $phraseGenerator;

    public function __construct(RandomPhraseGenerator $phraseGenerator)
    {
        $this->phraseGenerator = $phraseGenerator;
    }

    /**
     * @Route("/sales-channel-api/v{version}/random-phrase", name="sales-channel-api.random-phrase", methods={"GET"})
     */
    public function randomPhrase()
    {
        return new JsonResponse([
            'phrase' => $this->phraseGenerator->generatePhrase()
        ]);
    }
}
